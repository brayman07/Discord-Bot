require("dotenv").config();

const { default: axios } = require("axios");

const Discord = require("discord.js");

const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });

const { MessageEmbed } = require("discord.js");

const prefix = "-";

var weather;

client.once("ready", () => {
    console.log("What do you do to a soccerball?");
});

client.on("message", async (message) => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    if (command === "whodowekick") {
        message.channel.send("Tony!");
    } else if (command == "whatistony?") {
        message.channel.send("A great guy!");
    } else if (command == "help") {
        message.channel.send(
            "There are multiple commands that serve no purpose, to access these commands please type -uselessshit" +
                "\n" +
                "\n" +
                "The following commands list is constantly growing I will try to keep up with it" +
                "\n" +
                "\n" +
                "-weather" +
                "\n" +
                "This command currently gives windspeed and temperature of a given location, there is an error showing the description of the area currently hope to fix soon" +
                "\n" +
                "The format to use this command is -weather (city) if the city has a space please substitude the space with a +, i.e New York = New+York"
        );
    } else if (command == "imtony") {
        if (message.author.tag != "Marz#4952") {
            message.channel.send(
                "No you're not you're " + message.author.username
            );
        } else {
            message.channel.send("Hi Tony");
        }
    } else if (command == "rock") {
        var x = Math.floor(Math.random() * 3) + 1;
        if (x == 1) {
            const exampleEmbed = new MessageEmbed()
                .setColor("#0099ff")
                .setTitle("Scissors")
                .setDescription("You win!")
                .setTimestamp();
            message.channel.send({ embeds: [exampleEmbed] });
        } else if (x == 2) {
            const exampleEmbed = new MessageEmbed()
                .setColor("#0099ff")
                .setTitle("Rock")
                .setDescription("It's a tie!")
                .setTimestamp();
            message.channel.send({ embeds: [exampleEmbed] });
        } else if (x == 3) {
            const exampleEmbed = new MessageEmbed()
                .setColor("#0099ff")
                .setTitle("Paper")
                .setDescription("You lose!")
                .setTimestamp();
            message.channel.send({ embeds: [exampleEmbed] });
        } else {
            message.channel.send("Error");
        }
    } else if (command == "scissors") {
        var x = Math.floor(Math.random() * 3) + 1;
        if (x == 1) {
            const exampleEmbed = new MessageEmbed()
                .setColor("#0099ff")
                .setTitle("Scissors")
                .setDescription("It's a tie!")
                .setTimestamp();
            message.channel.send({ embeds: [exampleEmbed] });
        } else if (x == 2) {
            const exampleEmbed = new MessageEmbed()
                .setColor("#0099ff")
                .setTitle("Rock")
                .setDescription("You lose!")
                .setTimestamp();
            message.channel.send({ embeds: [exampleEmbed] });
        } else if (x == 3) {
            const exampleEmbed = new MessageEmbed()
                .setColor("#0099ff")
                .setTitle("Paper")
                .setDescription("You win!")
                .setTimestamp();
            message.channel.send({ embeds: [exampleEmbed] });
        } else {
            message.channel.send("Error");
        }
    } else if (command == "paper") {
        var x = Math.floor(Math.random() * 3) + 1;
        if (x == 1) {
            const exampleEmbed = new MessageEmbed()
                .setColor("#0099ff")
                .setTitle("Scissors")
                .setDescription("You lose!")
                .setTimestamp();
            message.channel.send({ embeds: [exampleEmbed] });
        } else if (x == 2) {
            const exampleEmbed = new MessageEmbed()
                .setColor("#0099ff")
                .setTitle("Rock")
                .setDescription("You win!")
                .setTimestamp();
            message.channel.send({ embeds: [exampleEmbed] });
        } else if (x == 3) {
            const exampleEmbed = new MessageEmbed()
                .setColor("#0099ff")
                .setTitle("Paper")
                .setDescription("It's a tie!")
                .setTimestamp();
            message.channel.send({ embeds: [exampleEmbed] });
        } else {
            message.channel.send("Error");
        }
    } else if (command === "spam") {
        if ((message.author.tag = "brayman07#6422")) {
            let times = args[1];
            for (var i = 0; i < times; i++) message.channel.send(`${args[0]}`);
            return;
        } else if ((message.author.tag = "Proofy2K#1867")) {
            let times = args[1];
            for (var i = 0; i < times; i++) message.channel.send(`${args[0]}`);
            return;
        } else {
            message.channel.send("You don't have permission to do that");
        }
    } else if (command == "cause-tonight") {
        message.channel.send(
            "The best thing 'bout tonight's that we're not fighting" +
                "\n" +
                "Could it be that we have been this way before" +
                "\n" +
                "I know you don't think that I am trying" +
                "\n" +
                "I know you're wearing thin down to the core" +
                "\n" +
                "But hold your breath" +
                "\n" +
                "Because tonight will be the night that I will fall for you" +
                "\n" +
                "Over again" +
                "\n" +
                "Don't make me change my mind" +
                "\n" +
                "Or I wont live to see another day" +
                "\n" +
                "I swear it's true" +
                "\n" +
                "Because a girl like you is impossible to find" +
                "\n" +
                "You're impossible to find" +
                "\n" +
                "\n" +
                "This is not what I intended" +
                "\n" +
                "I always swore to you I'd never fall apart" +
                "\n" +
                "You always thought that I was stronger" +
                "\n" +
                "I may have failed" +
                "\n" +
                "But I have loved you from the start" +
                "\n" +
                "Ohhhh" +
                "\n" +
                "\n" +
                "But hold your breath" +
                "\n" +
                "Because tonight will be the night that I will fall for you" +
                "\n" +
                "Over again" +
                "\n" +
                "Don't make me change my mind" +
                "\n" +
                "Or I won't live to see another day" +
                "\n" +
                "I swear it's true" +
                "\n" +
                "Because a girl like you is impossible to find" +
                "\n" +
                "It's impossible" +
                "\n" +
                "\n" +
                "So breathe in so deep" +
                "\n" +
                "Breathe me in" +
                "\n" +
                "I'm yours to keep" +
                "\n" +
                "And hold on to your words" +
                "\n" +
                "'Cause talk is cheap" +
                "\n" +
                "And remember me tonight" +
                "\n" +
                "When you're asleep" +
                "\n" +
                "Because tonight will be the night that I will fall for you" +
                "\n" +
                "Over again" +
                "\n" +
                "Don't make me change my mind" +
                "\n" +
                "Or I won't live to see another day" +
                "\n" +
                "I swear it's true" +
                "\n" +
                "Because a girl like you is impossible to find..." +
                "\n" +
                "\n" +
                "Tonight will be the night that I will fall for you" +
                "\n" +
                "Over again" +
                "\n" +
                "Don't make me change my mind" +
                "\n" +
                "Or I won't live to see another day" +
                "\n" +
                "I swear it's true" +
                "\n" +
                "Because a girl like you is impossible to find" +
                "\n" +
                "You're impossible to find..."
        );
    } else if (command === "play") {
        if (message.author.tag != "Brayman07#6422") {
            message.channel.send("You don't have permission to do that");
            return;
        }
        if (!args.length) {
            return message.channel.send(
                `You didn't provide any arguments, ${message.author}!`
            );
        }
        message.channel.send(";;play " + `${args}`);
    } else if (command == "weather") {
        if (!args.length) {
            return message.channel.send(
                `Please provide a city, ${message.author}!`
            );
        }
        let getWeather = async () => {
            let response = await axios
                .get(
                    "https://api.openweathermap.org/data/2.5/weather?q=" +
                        `${args}` +
                        "&units=imperial&appid=001b0f58045147663b1ea518d34d88b4"
                )
                .catch((err) => {
                    message.channel.send(
                        `Congrats you broke the bot, message Wish#1234 or Brayman07#6422, ${message.author}!`
                    );
                });
            let weather = response.data;
            return weather;
        };

        let weatherValue = await getWeather();
        message.channel.send(
            "The temperature in " +
                `${weatherValue.name}` +
                " is " +
                `${weatherValue.main.temp}` +
                "°F" +
                "\n" +
                `${weatherValue.weather[0].description}` +
                " with " +
                `${weatherValue.wind.speed}` +
                " mph winds"
        );
    }
});

client.login(process.env.TOKEN);
