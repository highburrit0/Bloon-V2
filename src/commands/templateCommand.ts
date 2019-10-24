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

        //Let us know it all went well!
        msgObject.channel.send("This command does absolutely nothing! Get vibe checked Asper!");
    }
}