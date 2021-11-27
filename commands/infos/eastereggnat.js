module.exports = {
    name: 'natbutt',
    aliases: [],
    category: 'Infos',
    utilisation: '{prefix}natbutt',

    execute(client, message) {
        message.channel.send(`${client.emotes.natbutt}`);
    },
};