const { Client, GatewayIntentBits, Events } = require('discord.js');

const token = process.env.DISCORD_TOKEN;

if (!token) {
  console.error('Missing DISCORD_TOKEN environment variable.');
  process.exit(1);
}

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once(Events.ClientReady, (c) => {
  console.log(`Ready! Logged in as ${c.user.tag}`);
});

client.on(Events.InteractionCreate, async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'hi') {
    const targetUser = interaction.options.getUser('user') || interaction.user;
    try {
      await interaction.reply({ content: `Hi, <@${targetUser.id}>!` });
    } catch (err) {
      console.error('Failed to reply to /hi command:', err);
    }
  }
});

client.login(token);

