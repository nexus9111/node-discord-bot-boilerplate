const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("echo")
    .setDescription("Replies with your input.")
    .addStringOption((option) =>
      option
        .setName("input")
        .setDescription("The input to echo back")
        .setRequired(true),
    ),
  async execute(interaction) {
    const value = interaction.options.getString("input");
    // ephemral
    await interaction.reply({ content: value, ephemeral: true });
  },
};
