/*global App*/
App.View.CloudcallView = App.View.BaseView.extend({

  template: App.Templates.cloudcall,
  model: App.models.cloudcallPage,

  events: {
    'click .cloud-action': 'cloudCall'
  },

  cloudCall: function(){
    //TODO: call $fh.act
    this.$el.find('.hidden').removeClass('hidden');
  }
});