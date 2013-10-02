var getWeather = require('./weather').getWeather;
var saveData = require('./databrowser').saveData;

exports.hello = function(params, callback) {
  var hostSpecificResponse = "Hello from the FeedHenry Cloud App named " + process.env.FH_APPNAME;
  return callback(null, {
    text: hostSpecificResponse
  });
};

exports.getWeather = function(params, callback) {
  return getWeather(params, callback);
};

exports.saveData = function(params, callback) {
  return saveData(params, callback);
};

exports.listActions = function(params, callback) {
  return callback(null, {
    actions: [{
      yolks: "things"
    }]
  });
}