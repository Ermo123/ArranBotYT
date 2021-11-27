const mongo = require('../config/mongodb-connect async');
const dbconfig = require('../config/dbconfig');
const historySchema = require('../models/history')

module.exports = (client, message, track) => {
    const sendToMongoDB = async () => {
        await mongo().then(async (mongoose) => {
            try {
                //console.log('Connected to ArranDB')

                const history = {
                    bot: 'ArranBotYT',
                    song: (track.title),
                    userBy: (track.requestedBy.username),
                    channel: (message.member.voice.channel.name)
                }

                console.log('Song history updated.')
                await new historySchema(history).save()
            } finally {
                mongoose.connection.close()
            }
        })
    }
    message.channel.send(`${client.emotes.music} - Now playing ${track.title} into ${message.member.voice.channel.name} ...`);
    sendToMongoDB()
}