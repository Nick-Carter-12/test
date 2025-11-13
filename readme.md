Discord /hi Bot (discord.js v14)

Simple bot that provides a `/hi [user]` slash command. If `user` is omitted, it greets the caller.

Requirements
- Node.js 18+
- A Discord application with a bot user
- Bot invited to your server with scopes `bot applications.commands`

Setup
1) Create a Discord application and add a Bot user in the Developer Portal.
2) Copy the following values:
   - Application (client) ID → `DISCORD_CLIENT_ID`
   - Bot token → `DISCORD_TOKEN`
   - Your test server (guild) ID → `DISCORD_GUILD_ID`
3) In your shell, set env vars (example for macOS/Linux):

   export DISCORD_TOKEN="YOUR_BOT_TOKEN"
   export DISCORD_CLIENT_ID="YOUR_APP_ID"
   export DISCORD_GUILD_ID="YOUR_GUILD_ID"

4) Install dependencies:

   npm install

5) Register the slash command to your test guild (fast propagation):

   npm run deploy:cmd

6) Start the bot:

   npm start

Usage
- In your server, type `/hi` and optionally pick a user target.
- Replies: `Hi, @target!` (defaults to you if not provided).

Notes
- Only `Guilds` intent is required since this bot only handles slash commands.
- To invite the bot, use an URL like:
  https://discord.com/api/oauth2/authorize?client_id=YOUR_APP_ID&scope=applications.commands%20bot&permissions=2147483648
  Replace `permissions` with the minimal set you need (e.g., Send Messages: 2048).

