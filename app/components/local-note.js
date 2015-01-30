import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'article',
  classNames: ['note'],

  actions: {
    deleteNote: function(id) {
      console.log('in component', id);
      this.sendAction('deleteNote', id);
    }
  }
});
