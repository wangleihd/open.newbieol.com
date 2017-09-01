const mongoose = require('mongoose');
const url = 'mongodb://123.56.134.156:27017/openstu';
mongoose.Promise = global.Promise;
mongoose.connect(url, {useMongoClient: true});

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
  qq: { type: String, default: "" },
  subject: { type: String },
  message: { type: String },
  data: { type: Date, default: Date.now },
  new: {type:Boolean, default: true },
  zxName: { type: String, default: ""},
  zxMessage: { type: String, default: ""},
  zxSubject: { type: String, default: ""},
  zxstate: { type: Boolean, default: false },
  subName: { type: Array, default: ['未选择公开课的课程', 'Unity 游戏开发', '3D美术', 'H5 全栈开发']}
});
module.exports.stu = mongoose.model('stu', stuShema);

let infoShema = Schema({
  name: { type: String },
  phone: { type: String },
  qq: { type: String, default: "" }
});
module.exports.info = mongoose.model('info', stuShema);
