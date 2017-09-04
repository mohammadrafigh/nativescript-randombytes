var randomBytesAndroid = require("randombytes-native.android.js");
var randomBytesIos = require("randombytes-native.ios.js");

module.exports = function (length, cb) {
  try {
    randomBytesAndroid(length, cb);
  } catch(e) {
    randomBytesIos(length, cb);
  }
};
