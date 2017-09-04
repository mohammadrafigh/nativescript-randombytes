var randomBytesAndroid = require("randombytes-native.android");
var randomBytesIos = require("randombytes-native.ios");

module.exports = function (length, cb) {
  try {
    randomBytesAndroid(length, cb);
  } catch(e) {
    randomBytesIos(length, cb);
  }
};
