# NodeJS Discord bot boilerplate

This is a simple boilerplate for a Discord bot using NodeJS and Discord.js.

## Prerequisites

- Docker
- Docker Compose

## Usage

1. Clone this repository
2. Copy `config.example.json` to `config.json` and fill in the necessary values
3. Run `docker-compose up -d`

## Create new command

1. Create a new file in the `commands\utility` directory
2. Add the following code to the file:

```javascript
const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("COMMAND_NAME")
    .setDescription("COMMAND_DESCRIPTION"),
  // Add options if needed
  async execute(interaction) {
    // Your code here
  },
};
```

| You can find example of commands in the `commands\utility` directory.

## License

- Author: [Joss C.](https://github.com/nexus9111)
- Contributors: [Pierre-Adrien V.](https://github.com/Pierrad)
