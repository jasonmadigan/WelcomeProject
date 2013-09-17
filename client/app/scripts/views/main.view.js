/*global App, Backbone, _*/
App.View.MainView = Backbone.View.extend({

  events: {
    'click .cloud-action': 'cloudActionPage',
    'click .data-browser': 'dataBrowserPage',
    'click .nodejs-page': 'nodePage',
    'click .cloud-integration': 'cloudIntegrationPage',
    'click .weather-sample' : 'weatherPage',
    'click .stats-analytics': 'analyticsPage',
    'click .btn.back': 'backToIntro',
  },

  initialize: function(){
    this.$el = $('#main_page');
    _.bindAll(this, 'cloudActionPage', 'dataBrowserPage', 'nodePage', 'cloudIntegrationPage', 'weatherPage', 'analyticsPage', 'backToIntro');
  },

  render: function(){
    var introView = new App.View.IntroView();
    this.introView = introView.render();
    this.$el.html(this.introView);
  },

  cloudActionPage: function(){
    if(!this.cloudCallView){
      var cloudCallView = new App.View.CloudcallView();
      this.cloudCallView = cloudCallView.render();
    }
    this.$el.html(this.cloudCallView);
  },

  dataBrowserPage: function(){
    if(!this.databrowserView){
      var databrowserView = new App.View.DatabrowserView();
      this.databrowserView = databrowserView.render();
    }
    this.$el.html(this.databrowserView);
  },

  nodePage: function(){
    if(!this.nodeView){
      var nodeView = new App.View.NodeView();
      this.nodeView = nodeView.render();
    }
    this.$el.html(this.nodeView);
  },

  cloudIntegrationPage: function(){
    if(!this.integrationView){
      var integrationView = new App.View.IntegrationView();
      this.integrationView = integrationView.render();
    }
    this.$el.html(this.integrationView);
  },

  weatherPage: function(){
    if(!this.weatherView){
      var weatherView = new App.View.WeatherSampleView();
      this.weatherView = weatherView.render();
    }
    this.$el.html(this.weatherView);
  },

  analyticsPage: function(){
    if(!this.statsView){
      var statsView = new App.View.StatsView();
      this.statsView = statsView.render();
    }
    this.$el.html(this.statsView);
  },

  backToIntro: function(){
    this.$el.html(this.introView);
  }
});