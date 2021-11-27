let dbconfig = {
    db_name: "ArranBotDB",
    db_user: "admin",
    password: "Luis1234",
    getUrl() {
        return `mongodb+srv://${this.db_user}:${this.password}@arranbot.uspdz.mongodb.net/${this.db_name}?retryWrites=true&w=majority`
    } 
}
 
module.exports = dbconfig;