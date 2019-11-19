"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Discord = require("discord.js");
class templateCommand {
    constructor() {
        this._command = "templateCommand";
    }
    help() {
        return "This command does absolutely nothing! Get vibe checked Asper!";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, client) {
        return __awaiter(this, void 0, void 0, function* () {
            let mapEmbed = new Discord.RichEmbed()
                .setTitle("Choose a map! Highest votes wins!")
                .setDescription("React with an 🇷 to pick Riverside \n React with an  to pick Oceanside \n React with an 🆒 to pick Cliffside \n React with an ⛰ to pick Mountain Side \n");
        });
    }
}
exports.default = templateCommand;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwcGljay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy9tYXBwaWNrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsc0NBQXNDO0FBR3RDLE1BQXFCLGVBQWU7SUFBcEM7UUFFcUIsYUFBUSxHQUFHLGlCQUFpQixDQUFBO0lBa0JqRCxDQUFDO0lBaEJHLElBQUk7UUFDQSxPQUFPLCtEQUErRCxDQUFDO0lBQzNFLENBQUM7SUFFRCxhQUFhLENBQUMsT0FBZTtRQUN6QixPQUFPLE9BQU8sS0FBSSxJQUFJLENBQUMsUUFBUSxDQUFBO0lBQ25DLENBQUM7SUFFSyxVQUFVLENBQUMsSUFBYyxFQUFFLFNBQTBCLEVBQUUsTUFBc0I7O1lBRS9FLElBQUksUUFBUSxHQUFHLElBQUksT0FBTyxDQUFDLFNBQVMsRUFBRTtpQkFDakMsUUFBUSxDQUFDLG1DQUFtQyxDQUFDO2lCQUM3QyxjQUFjLENBQUMsMEpBQTBKLENBQUMsQ0FBQTtRQUduTCxDQUFDO0tBQUE7Q0FDSjtBQXBCRCxrQ0FvQkMifQ==