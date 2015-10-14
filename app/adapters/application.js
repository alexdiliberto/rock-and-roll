import DS from 'ember-data';
import ENV from 'rarwe/config/environment';

export default DS.JSONAPIAdapter.extend({
  host: ENV.apiHost,

  shouldBackgroundReloadRecord: function() {
    return false;
  }
});
