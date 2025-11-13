const { REST, Routes, SlashCommandBuilder } = require('discord.js');

const token = process.env.DISCORD_TOKEN;
const clientId = process.env.DISCORD_CLIENT_ID; // Application (bot) ID
const guildId = process.env.DISCORD_GUILD_ID;   // Target guild for rapid testing

if (!token || !clientId || !guildId) {
  console.error('Missing one or more env vars: DISCORD_TOKEN, DISCORD_CLIENT_ID, DISCORD_GUILD_ID');
  process.exit(1);
}

const commands = [
  new SlashCommandBuilder()
    .setName('hi')
    .setDescription('Say hi to someone')
    .addUserOption((opt) =>
      opt
        .setName('user')
        .setDescription('Who to say hi to (defaults to you)')
        .setRequired(false)
    )
    .toJSON(),
];

const rest = new REST({ version: '10' }).setToken(token);

(async () => {
  try {
    console.log('Refreshing application (guild) commands...');
    await rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commands });
    console.log('Successfully reloaded guild commands.');
  } catch (error) {
    console.error('Error reloading commands:', error);
    process.exit(1);
  }
})();

