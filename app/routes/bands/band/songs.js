import Ember from 'ember';
import { capitalize as capitalizeWords } from 'rarwe/helpers/capitalize';
//import wait from 'rarwe/utils/wait';

export default Ember.Route.extend({
  model() {
    return this.modelFor('bands.band');
  },

  actions: {
    // loading() {
    //   window.alert("Loading the band's songs, ok?");
    // },

    didTransition() {
      var band = this.modelFor('bands.band');
      var name = capitalizeWords(band.get('name'));
      document.title = `${name} songs - Rock & Roll`;
    },

    createSong() {
      var controller = this.get('controller');
      var band = this.modelFor('bands.band');

      var song = this.store.createRecord('song', {
        title: controller.get('title'),
        band: band
      });
      song.save().then(function() {
        controller.set('title', '');
      });
    }
  }
});
