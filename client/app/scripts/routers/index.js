/*global App, Backbone*/
App.Router.MainRoute = Backbone.Router.extend({

  routes : {
    '': 'mainPage',
    'main': 'mainPage'
  },

  mainPage: function(){
    var mainView = new App.View.MainView();
    mainView.render();
  }
});