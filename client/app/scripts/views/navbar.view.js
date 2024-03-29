/*global App, Backbone, _*/
App.View.NavbarView = Backbone.View.extend({

  template: App.Templates.navbar,
  initialize: function(opts){
    this.model = new Backbone.Model({title: opts.title, titleWidth: opts.titleWidth});
    this.listenTo(this.model, 'change:title', this.render);
    _.bindAll(this, 'setTitle');
  },
  
  render: function(){
    this.$el = this.template(this.model.toJSON());
    return this.$el;
  },

  setTitle: function(title){
    this.model.set('title', title);
  }
});