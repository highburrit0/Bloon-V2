import * as Discord from "discord.js";
import {IBotCommand} from "../api";

export default class help implements IBotCommand{

    private readonly _command = "help"

    help(): string {
        return "Helps you";
    }
    
    isThisCommand(command: String): boolean {
        return command ===this._command
    }

    //remember to update this fucktard

    async runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): Promise<void> {

        let lookingEmbed = new Discord.RichEmbed()
        .setTitle("Hello! Bloon here! Here are a full list of commands you can use!")
        .setDescription("?help Displays this menu! wait... you already know that. \n ?Looking - Displays the Looking To Play menu!")

        //Let us know it all went well!
        msgObject.channel.send("Hello! Bloon here! Here are a full list of commands you can use! \n ?help Displays this menu! wait... you already know that. \n ?Looking - Opens the Looking To Play chat box!");
    }
}