let dbconfig = {
    db_name: "",
    db_user: "",
    password: "",
    getUrl() {
        return `mongodb+srv://${this.db_user}:${this.password}@arranbot.uspdz.mongodb.net/${this.db_name}?retryWrites=true&w=majority`
    } 
}
 
module.exports = dbconfig;
