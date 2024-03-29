/*global App, _, $fh*/
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
    var inputField = this.$el.find('#nameField');
    var username = inputField.val();
    var self = this;
    if(!username || username === null || username === ''){
      this.showError();
    } else {
      this.hideError();
      $fh.act({act:'saveData', req: {collection: 'Users', 'document': {username: username}}}, function(res){
        if(res && res.status === 'ok'){
          self.dataSaved();
        } else {
          self.dataError('Server error');
        }
      }, function(err){
        self.dataError(err);
      });
    }
  },

  showError: function(){
    this.$el.find('.alert.hidden').removeClass('hidden').text('Please enter a name');
    return;
  },

  hideError: function(){
    this.$el.find('.alert').addClass('hidden').empty();
  },

  dataSaved: function(){
    this.$el.find('.response_content').addClass('alert-success').removeClass('alert-danger hidden').text(this.model.toJSON().moreInfo);
  }
});