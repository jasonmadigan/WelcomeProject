var getWeather = require('./weather').getWeather;
var saveData = require('./databrowser').saveData;

exports.hello = function(params, callback){
  return callback(null, {text: 'Hello from FeedHenry'});
};

exports.getWeather = function(params, callback){
  return getWeather(params, callback);
};

exports.saveData = function(params, callback){
  return saveData(params, callback);
};



