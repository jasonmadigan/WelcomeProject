/*global App, Backbone*/
App.Model.PageModel = Backbone.Model.extend({

});

App.models.introPage = new App.Model.PageModel({
  title:'Welcome',
  header: 'Welcome To FeedHenry',
  text: 'Learn more about our platform and interact with it below.',
  nextButtonText: 'Let\'s Start',
  menuItems: [{className: 'cloud-action', imgPath: '/img/touch/apple-touch-icon.png', menuTitle: 'Cloud Action', menuSubTitle: 'Try our live Cloud code', responsiveClass: 'col-md-3 col-lg-2', iconClass:'cloud'},
              {className: 'data-browser', imgPath: '/img/touch/apple-touch-icon.png', menuTitle: 'Data Browser', menuSubTitle: 'Use MongoDB', responsiveClass: 'col-md-3 col-lg-2', iconClass: 'table'},
              {className: 'nodejs-page', imgPath: '/img/touch/apple-touch-icon.png', menuTitle: 'Powered By Nodejs', menuSubTitle: 'Create Cloud code', responsiveClass: 'col-md-3 col-lg-2', iconClass: 'bolt'},
              {className: 'cloud-integration', imgPath: '/img/touch/apple-touch-icon.png', menuTitle: 'Cloud Integration', menuSubTitle: 'Connect to other services', responsiveClass: 'col-md-3 col-lg-2', iconClass: 'gears'},
              {className: 'weather-sample', imgPath: '/img/touch/apple-touch-icon.png', menuTitle: 'Example', menuSubTitle: 'Use Location and Weather', responsiveClass: 'col-md-2 col-md-offset-2 col-lg-2 col-lg-offset-0', iconClass: 'sun'},
              {className: 'stats-analytics', imgPath: '/img/touch/apple-touch-icon.png', menuTitle: 'Analytics Engine', menuSubTitle: 'Instrument your App', responsiveClass: 'col-md-2 col-md-offset-4 col-lg-2 col-lg-offset-0', iconClass: 'bar-chart'} ]
});

App.models.cloudcallPage = new App.Model.PageModel({
  title: 'Cloud Action',
  header: 'Cloud Action',
  text: 'We have connected the client code to the matching cloud code. Press the button to see the response from cloud.',
  buttonText: 'Call Cloud'
});

App.models.statsPage = new App.Model.PageModel({
  title: 'Analytics',
  header: 'Analytics',
  text: 'Go to the Stats section of the Studio and see if your device has been detected'
});

App.models.nodePage = new App.Model.PageModel({
  title: 'Powered By Nodejs',
  header: 'Powered By Nodejs',
  text:'FeedHenry Apps are made much more powerful by our Node.js cloud code. You have all of the functionality of Node available to you including all of its modules',
  titleWidth: '150'
});

App.models.databrowserPage = new App.Model.PageModel({
  title: 'Data Browser',
  header: 'Data Browser',
  text: 'Enter your name and now tap this button to save your name in the Cloud.',
  moreInfo: 'Go to the Data Browser in the Studio and see if you can find your name stored there.',
  inputFieldLabel: 'Please Enter Your Name',
  buttonText: 'Save'
});

App.models.weatherPage = new App.Model.PageModel({
  title: 'Weather Info Sample',
  header: 'Weather Info Sample',
  geoText: 'Now let’s grab your location and do something with it. Press here to find your location',
  geoButtonText : 'Get My Location',
  geoLabelText: 'My Location',
  getWeatherText: 'Now we are going to use that location to request weather information from an online web-service via our Cloud Code. Tap the button to do this.',
  getWeatherButtonText: 'Get My Weather Info',
  titleWidth: '180'
});

App.models.integrationPage = new App.Model.PageModel({
  title: 'Cloud Integration',
  header: 'Cloud Integration',
  titleWidth: '150',
  text: 'Easily integration with you existing backends using Cloud Plugins'
});