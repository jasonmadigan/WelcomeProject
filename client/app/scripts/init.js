/*global App, Backbone, Handlebars, MBP*/
var initialize = function(){
  MBP.preventZoom();
  MBP.enableActive();
  //FastClick.attach(document.body);
  App.routers.mainRoute = new App.Router.MainRoute();
  Backbone.history.start({pushState: true, root: document.location.pathname});
};

//check if cordova is available
if(window.device && window.device.cordova){
  document.addEventListener('deviceready', initialize, false);
} else {
  $(initialize);
}

Handlebars.registerHelper('visibleClass', function(index){
  var visibleClass = [];
  if(index >= 2){
    visibleClass.push('hidden-xs');
  }
  if(index >= 3){
    visibleClass.push('hidden-sm');
  }
  if(index >= 4){
    visibleClass.push('hidden-md');
  }
  return visibleClass.join(' ');
});

