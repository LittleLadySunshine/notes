import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'article',
  classNames: ['note'],

  actions: {
    deleteNote: function(remove) {
      console.log('in component', remove);
      this.sendAction('deleteNote',remove);
    }
  }
});
