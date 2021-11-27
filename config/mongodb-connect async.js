const mongoose = require('mongoose');
const { getUrl } = require('./dbconfig');
const dbconfig = require('./dbconfig');

mongoose.connect(dbconfig.getUrl(), {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    //useCreateIndex:true,
}).then(()=>console.log("Connected to ArranBotDB"))
  .catch(err=>console.log("DB ERROR", err));

module.exports = mongoose;


module.exports= async () => {
  await mongoose.connect(dbconfig.getUrl(),{
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  return mongoose
}