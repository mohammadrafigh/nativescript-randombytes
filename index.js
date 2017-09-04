var randomBytesAndroid = require("./randombytes-native.android");
var randomBytesIos = require("./randombytes-native.ios");

module.exports = function (length, cb) {
  try {
    return randomBytesAndroid(length, cb);
  } catch(e) {
    return randomBytesIos(length, cb);
  }
};
