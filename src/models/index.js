const emailCode = require('./emailCode');
const User = require('./user');

//EmailCode -> UserId
emailCode.belongsTo(User)
User.hasMany(emailCode)
