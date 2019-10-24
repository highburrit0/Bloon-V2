import * as Discord from "discord.js";
import {IBotCommand} from "../api";

export default class templateCommand implements IBotCommand{

    private readonly _command = "templateCommand"

    help(): string {
        return "This command does absolutely nothing! Get vibe checked Asper!";
    }
    
    isThisCommand(command: String): boolean {
        return command ===this._command
    }

    async runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): Promise<void> {

        let mapEmbed = new Discord.RichEmbed()
            .setTitle("Choose a map! Highest votes wins!")
            .setDescription("React with an 🇷 to pick Riverside \n React with an  to pick Oceanside \n React with an 🆒 to pick Cliffside \n React with an ⛰ to pick Mountain Side \n")


    }
}