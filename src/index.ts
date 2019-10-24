import * as Discord from "discord.js";
import * as ConfigFile from "./config";
import { IBotCommand } from "./api";
import { cpus } from "os";

const client: Discord.Client = new Discord.Client();

let commands: IBotCommand[] = [];

loadCommands(`${__dirname}/commands`)

client.on("ready", () => {

    //Let us know that the bot is online
    console.log("Ready To Go!");
})

client.on("guildMemberAdd", member => {

    let welcomeChannel = member.guild.channels.find(channel => channel.name === "welcome") as Discord.TextChannel
    welcomeChannel.send(`Welcome ${member.displayName}! We hope you enjoy the intruder community!`)

    member.send("Hello! My name is Bloon! I had a brother, but he ran away. If you need any help, feel free to use the ?help command!");
})

client.on("message", msg =>{

    //Ignore the message if it was sent by the bot
    if(msg.author.bot) {return;}

    //Ignore messages that dont start with the prefix
    if(!msg.content.startsWith(ConfigFile.config.prefix)) {return;}

    //handle the command
    handleCommand(msg);
})

async function handleCommand(msg: Discord.Message) {

    //Split the string into the command and all of the args
    let command = msg.content.split(" ")[0].replace(ConfigFile.config.prefix, "");
    let args = msg.content.split(" ").slice(1);

        //Loop through all of our loaded commands
    for(const commandsClass of commands){

        //Attempt to execute code but ready in case of a possible error
        try{

            //Check if our command class is the correct one
            if(!commandsClass.isThisCommand(command)){

                //Go to the next iteration of the loop if this isnt the correct command class
                continue;
            }

            // Pause execution whilst we run the commands code
            await commandsClass.runCommand(args, msg, client)

        }
        catch(exeption){

            //If there is an error, then log the exeption
            console.log(exeption);
        }
    }
}

function loadCommands(commandsPath: string){

    //Exit if there are no commands
    if(!ConfigFile.config || (ConfigFile.config.commands as string[]).length === 0) { return;}

    //Loop through all of the commands in our config file
    for (const commandName of ConfigFile.config.commands as string[]) {

        const commandsClass = require(`${commandsPath}/${commandName}`).default;

        const command = new commandsClass() as IBotCommand;

        commands.push(command);
    }
}

client.login(ConfigFile.config.token);