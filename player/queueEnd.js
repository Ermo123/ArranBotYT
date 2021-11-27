module.exports = (client, message, queue) => {
    message.channel.send(`${client.emotes.error} - Music stopped because there is no more music in the queue !`);
};