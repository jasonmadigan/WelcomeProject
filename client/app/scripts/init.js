/*global App, Backbone*/
var initialize = function(){
  App.routers.mainRoute = new App.Router.MainRoute();
  Backbone.history.start({pushState: true, root: '/index.html'});
};

//check if cordova is available
if(window.device && window.device.cordova){
  document.addEventListener('deviceready', initialize, false);
} else {
  $(initialize);
}