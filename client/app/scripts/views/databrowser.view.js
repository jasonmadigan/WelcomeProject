/*global App, _*/
App.View.DatabrowserView = App.View.BaseView.extend({

  template: App.Templates.databrowser,
  model: App.models.databrowserPage,

  events: {
    'click .save-data': 'saveData'
  },

  initialize: function(){
    _.bindAll(this, 'dataSaved');
  },

  saveData: function(){
    //var userName = this.$el.find('#nameField').val();
    //TODO: save data in the cloud
    this.dataSaved();
  },

  dataSaved: function(){
    this.$el.find('.hidden').removeClass('hidden');
  }
});