const mongoose = require('mongoose');
const url = 'mongodb://oc:open@ds151153.mlab.com:51153/oc';

mongoose.connect(url);

let db = mongoose.connection;

db.once('open', function(){
  console.log('connect db ok!');
})

let Schema = mongoose.Schema;

let userShema = Schema({
  user: { type: String },
  name: { type: String },
  password: { type: String }
});
module.exports.user = mongoose.model('user', userShema);

let stuShema = Schema({
  name: { type: String },
  phone: { type: String },
  stu: { type: String },
  qq: { type: String, default: "" }
});
module.exports.stu = mongoose.model('stu', stuShema);

let infoShema = Schema({
  name: { type: String },
  phone: { type: String },
  qq: { type: String, default: "" }
});
module.exports.info = mongoose.model('info', stuShema);
