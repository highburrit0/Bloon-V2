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
class help {
    constructor() {
        this._command = "help";
    }
    help() {
        return "Helps you";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, client) {
        return __awaiter(this, void 0, void 0, function* () {
            let lookingEmbed = new Discord.RichEmbed()
                .setTitle("Hello! Bloon here! Here are a full list of commands you can use!")
                .setDescription("?help Displays this menu! wait... you already know that. \n ?Looking - Displays the Looking To Play menu!");
            msgObject.channel.send("Hello! Bloon here! Here are a full list of commands you can use! \n ?help Displays this menu! wait... you already know that. \n ?Looking - Opens the Looking To Play chat box!");
        });
    }
}
exports.default = help;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy9oZWxwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsc0NBQXNDO0FBR3RDLE1BQXFCLElBQUk7SUFBekI7UUFFcUIsYUFBUSxHQUFHLE1BQU0sQ0FBQTtJQXFCdEMsQ0FBQztJQW5CRyxJQUFJO1FBQ0EsT0FBTyxXQUFXLENBQUM7SUFDdkIsQ0FBQztJQUVELGFBQWEsQ0FBQyxPQUFlO1FBQ3pCLE9BQU8sT0FBTyxLQUFJLElBQUksQ0FBQyxRQUFRLENBQUE7SUFDbkMsQ0FBQztJQUlLLFVBQVUsQ0FBQyxJQUFjLEVBQUUsU0FBMEIsRUFBRSxNQUFzQjs7WUFFL0UsSUFBSSxZQUFZLEdBQUcsSUFBSSxPQUFPLENBQUMsU0FBUyxFQUFFO2lCQUN6QyxRQUFRLENBQUMsa0VBQWtFLENBQUM7aUJBQzVFLGNBQWMsQ0FBQywyR0FBMkcsQ0FBQyxDQUFBO1lBRzVILFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGdMQUFnTCxDQUFDLENBQUM7UUFDN00sQ0FBQztLQUFBO0NBQ0o7QUF2QkQsdUJBdUJDIn0=