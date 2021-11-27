module.exports = (client, message, queue) => {
    message.channel.send(`${client.emotes.error} - Music stopped because I have been disconnected from the channel !`);
};