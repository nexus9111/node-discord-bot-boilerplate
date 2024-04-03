const { SlashCommandBuilder } = require("discord.js");

const ROLE_NAME = "example";

module.exports = {
  data: new SlashCommandBuilder()
    .setName("add-role")
    .setDescription("Add role !"),
  async execute(interaction) {
    await interaction.reply({ content: "You get new role !", ephemeral: true });

    const role = interaction.guild.roles.cache.find(
      (role) => role.name === ROLE_NAME,
    );
    const member = interaction.member;
    member.roles.add(role);
  },
};
