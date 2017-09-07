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
  times: { type: Number },
  qq: { type: String, default: "" },
  subject: { type: String },
  message: { type: String },
  data: { type: Date, default: Date.now },
  new: {type:Boolean, default: true },
  zxName: { type: String, default: ""},
  zxMessage: { type: String, default: ""},
  zxSubject: { type: String, default: ""},
  zxstate: { type: Boolean, default: false },
  times: { type: Number, default: 0 },
  subName: { type: Array, default: ['未选择公开课的课程', 'Unity 开发', '3D 游戏美术', 'H5 全栈开发']}
});
module.exports.stu = mongoose.model('stu', stuShema);

let cfgShema = Schema({
  class:[{
      state: { type: Boolean, default: true },
      time: { type: String, default: '09:30'},
      name: { type: String, default: 'Unity 开发'},
      number: { type: Number, default: 25 }
  },{
      state: { type: Boolean, default: true },
      time: { type: String, default: '13:30'},
      name: { type: String, default: '3D 游戏美术'},
      number: { type: Number, default: 25 }
  },{
      state: { type: Boolean, default: false },
      time: { type: String, default: '16:30'},
      name: { type: String, default: 'H5 全栈开发'},
      number: { type: Number, default: 25 }
  }],
  times: { type: Number, default: 1 },
  Date: { type: Date, default: "" }
});
module.exports.conf = mongoose.model('config', stuShema);
