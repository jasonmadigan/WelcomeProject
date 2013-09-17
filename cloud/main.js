var RateLimiter = require('limiter').RateLimiter;
var secondLimiter = new RateLimiter(3, 'second');
var hourLimiter = new RateLimiter(500, 'hour');
var request = require('request');

var redis = require('redis');
var port = 6379;
var host = '127.0.0.1';
if(process.env && process.env.FH_REDIS_PORT){
  port = parseInt(process.env.FH_REDIS_PORT, 10);
}
if(process.env && process.env.FH_REDIS_HOST){
  host = process.env.FH_REDIS_HOST;
}

var cacheClient = redis.createClient(port, host, {});
if(process.env && process.env.FH_REDIS_PASSWORD && process.env.FH_REDIS_PASSWORD.length > 0){
  cacheClient.auth(process.env.FH_REDIS_PASSWORD);
}
cacheClient.on('ready', function(){
  console.log("Cache Client is Ready");
});
cacheClient.on('error', function(error){
  console.log("Failed to connect cache", error);
  cacheClient = undefined;
});

var API_KEY = "qfyye6yt5hedsgk8v8ey7n3n";
var CACHE_EXPIRE = 1*60*60; //cache weather data for 1 hour


exports.hello = function(params, callback){
  return callback(null, {text: 'Hello from FeedHenry'});
};

var fetchWeatherData = function(latitude, longitude, callback){
  var url = "http://api.worldweatheronline.com/free/v1/weather.ashx";
  request({method: 'GET', url: url, qs: {
    q: latitude + "," + longitude,
    format: 'json',
    num_of_days: 6,
    key: API_KEY
  }, json: true}, function(error, response, body){
    callback(error, body);
  });
};

var getFromCache = function(cacheKey, callback){
  console.log("Get data from cache");
  if(cacheClient){
    cacheClient.get(cacheKey, function(err, cacheData){
      callback(err, cacheData);
    });
  } else {
    callback(null, null);
  }
};

var setInCache = function(cacheKey, data){
  if(cacheClient){
    console.log("save data in cache");
    cacheClient.set(cacheKey, JSON.stringify(data), function(err){
      if(err){
        console.log("Cache save error", err);
      }
    });
  }
};

var processWeatherData = function(originData, callback){
  console.log("Got weather data", originData);
  var result = originData.data.weather.map(function(item){
    return {
      date: item.date,
      high: item.tempMaxC,
      low: item.tempMinC,
      desc: item.weatherDesc[0].value,
      icon: item.weatherIconUrl[0].value
    };
  });
  return callback(null, {data: result});
};

exports.getWeather = function(params, callback){
  //service provided by worldweatheronline(http://developer.worldweatheronline.com/)
  //free plan, limit: 3 req/second and 500 req/hour
  var lat = parseFloat(params.lat).toFixed(3);
  var lon = parseFloat(params.lon).toFixed(3);
  var cachekey = "key_" + lat + "_" + lon;
  cachekey = cachekey.replace(/\./g, '_');
  console.log("cache key is ", cachekey);
  //first, check if we have a cache version
  getFromCache(cachekey, function(err, cacheData){
    if(err || (cacheData == null)){
      console.log('no data from cache');
      //no cache data, need to get from the remote service
      //check we are not over request limits
      secondLimiter.removeTokens(1, function(err, remainRequests){
        if(err){
          return callback('429 Too Many Requests (1)');
        }
        console.log('not over second limit');
        hourLimiter.removeTokens(1, function(err, remainRequests){
          if(err){
            return callback('429 Too Many Requests (2)');
          }
          console.log('not over hour limit');
          //we are not over limit, make the request
          fetchWeatherData(lat, lon, function(err, weatherData){
            //request failed, return it to the client
            if(err){
              return callback(err);
            }
            //request succeeded, save it in the cache
            setInCache(cachekey, weatherData);
            //return the data
            processWeatherData(weatherData, callback);
          });
        });
      });
    } else {
      //found data in the cache, return
      return processWeatherData(JSON.parse(cacheData), callback);
    }
  });
};


