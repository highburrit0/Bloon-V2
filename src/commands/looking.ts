import * as Discord from "discord.js";
import {IBotCommand} from "../api";


export default class looking implements IBotCommand{

    private readonly _command = "looking"

    help(): string {
        return "This command will let you add yourself to the Looking To Play role in the discord!";
    }
    
    isThisCommand(command: String): boolean {
        return command ===this._command
    }

    async runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): Promise<void> {

        if (args.length < 0) { return; }
        
        let lookingEmbed = new Discord.RichEmbed()
            .setTitle("Hello! I am used to go looking to play on the discord!")
            .setDescription("Just use the ✅ to get Looking To Play, and the ❎ to stop looking!")

            let lookingMessage = await msgObject.channel.send(lookingEmbed);

            await (lookingMessage as Discord.Message).react("✅");
            await (lookingMessage as Discord.Message).react("❎");

            const filter = (reaction: Discord.MessageReaction) => reaction.emoji.name === "✅" || reaction.emoji.name === "❎";
            const member = await (lookingMessage as Discord.Message).awaitReactions;

            client.on("messageReactionAdd",(reaction,user)=>{
                if(user.bot)return;
                if(!reaction.message.channel) return;

                if(reaction.emoji.name == "✅"){        
                    reaction.message.guild.member(user).addRole("636766753115865089").catch(console.error);
                }
            
                if(reaction.emoji.name == "❎"){
                    reaction.message.guild.member(user).removeRole("636766753115865089").catch(console.error);
                }
            }
            )
        }
}
