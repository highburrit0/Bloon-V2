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
class looking {
    constructor() {
        this._command = "looking";
    }
    help() {
        return "This command will let you add yourself to the Looking To Play role in the discord!";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, client) {
        return __awaiter(this, void 0, void 0, function* () {
            if (args.length < 0) {
                return;
            }
            let lookingEmbed = new Discord.RichEmbed()
                .setTitle("Hello! I am used to go looking to play on the discord!")
                .setDescription("Just use the ✅ to get Looking To Play, and the ❎ to stop looking!");
            let lookingMessage = yield msgObject.channel.send(lookingEmbed);
            yield lookingMessage.react("✅");
            yield lookingMessage.react("❎");
            const filter = (reaction) => reaction.emoji.name === "✅" || reaction.emoji.name === "❎";
            const member = yield lookingMessage.awaitReactions;
            client.on("messageReactionAdd", (reaction, user) => {
                if (user.bot)
                    return;
                if (!reaction.message.channel)
                    return;
                if (reaction.emoji.name == "✅") {
                    reaction.message.guild.member(user).addRole("636766753115865089").catch(console.error);
                }
                if (reaction.emoji.name == "❎") {
                    reaction.message.guild.member(user).removeRole("636766753115865089").catch(console.error);
                }
            });
        });
    }
}
exports.default = looking;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9va2luZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy9sb29raW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsc0NBQXNDO0FBSXRDLE1BQXFCLE9BQU87SUFBNUI7UUFFcUIsYUFBUSxHQUFHLFNBQVMsQ0FBQTtJQXdDekMsQ0FBQztJQXRDRyxJQUFJO1FBQ0EsT0FBTyxvRkFBb0YsQ0FBQztJQUNoRyxDQUFDO0lBRUQsYUFBYSxDQUFDLE9BQWU7UUFDekIsT0FBTyxPQUFPLEtBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQTtJQUNuQyxDQUFDO0lBRUssVUFBVSxDQUFDLElBQWMsRUFBRSxTQUEwQixFQUFFLE1BQXNCOztZQUUvRSxJQUFJLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO2dCQUFFLE9BQU87YUFBRTtZQUVoQyxJQUFJLFlBQVksR0FBRyxJQUFJLE9BQU8sQ0FBQyxTQUFTLEVBQUU7aUJBQ3JDLFFBQVEsQ0FBQyx3REFBd0QsQ0FBQztpQkFDbEUsY0FBYyxDQUFDLG1FQUFtRSxDQUFDLENBQUE7WUFFcEYsSUFBSSxjQUFjLEdBQUcsTUFBTSxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUVoRSxNQUFPLGNBQWtDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3JELE1BQU8sY0FBa0MsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7WUFFckQsTUFBTSxNQUFNLEdBQUcsQ0FBQyxRQUFpQyxFQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksS0FBSyxHQUFHLElBQUksUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLEtBQUssR0FBRyxDQUFDO1lBQ2pILE1BQU0sTUFBTSxHQUFHLE1BQU8sY0FBa0MsQ0FBQyxjQUFjLENBQUM7WUFFeEUsTUFBTSxDQUFDLEVBQUUsQ0FBQyxvQkFBb0IsRUFBQyxDQUFDLFFBQVEsRUFBQyxJQUFJLEVBQUMsRUFBRTtnQkFDNUMsSUFBRyxJQUFJLENBQUMsR0FBRztvQkFBQyxPQUFPO2dCQUNuQixJQUFHLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxPQUFPO29CQUFFLE9BQU87Z0JBRXJDLElBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLElBQUksR0FBRyxFQUFDO29CQUMxQixRQUFRLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLG9CQUFvQixDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztpQkFDMUY7Z0JBRUQsSUFBRyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksSUFBSSxHQUFHLEVBQUM7b0JBQzFCLFFBQVEsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxVQUFVLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO2lCQUM3RjtZQUNMLENBQUMsQ0FDQSxDQUFBO1FBQ0wsQ0FBQztLQUFBO0NBQ1I7QUExQ0QsMEJBMENDIn0=