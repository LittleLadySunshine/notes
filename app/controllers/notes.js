import Ember from "ember";

export default Ember.ArrayController.extend({
  actions: {
    newNote: function() {
      var body = this.get('noteCopy');
      var title = this.get('titleCopy');

      if ((body === null) || (title ===null)) {
        this.flashMessage('fail', 'You cannot have an empty title or body.');
      } else {
      var note = this.store.createRecord('note', { body: body });
      this.set('noteCopy', '');
      note.save().then(function(){
        this.flashMessage('success', 'Your note has been created!');
        }.bind(this));
      }
    },

    deleteNote: function(remove) {
      this.store.find('note', remove).then(function(note) {
        note.destroyRecord().then(function(){
          this.flashMessage('success', 'Woot! That notes is gone forever.');
        }.bind(this));
      }.bind(this));
    }
  }
});
