/*global App, _, alert*/
App.View.WeatherSampleView = App.View.BaseView.extend({

  template: App.Templates.weather,
  model: App.models.weatherPage,

  events: {
    'click .get-geo-btn': 'getLocation',
    'click .get-weather-btn': 'getWeatherData'
  },

  initialize: function(){
    _.bindAll(this, 'getLocation', 'gotLocation', 'getWeatherData', 'gotWeatherData');
  },

  getLocation: function(){
    var self = this;
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(function(pos){
        self.gotLocation(pos);
      }, function(err){
        alert('Failed to get location : ' + err.message + '(' + err.code + ')');
      }, {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
      });
    }
  },

  gotLocation: function(pos){
    this.coords = pos.coords;
    this.$el.find('#locationField').val('lat = ' + this.coords.latitude + '; lon = ' + this.coords.longitude);
    this.$el.find('.hidden').removeClass('hidden');
  },

  getWeatherData: function(){
    //TODO: use $fh.act to get weather data
    this.gotWeatherData();
  },

  gotWeatherData: function(){
    this.$el.find('.weather-info').text('weather info here...');
  }
});