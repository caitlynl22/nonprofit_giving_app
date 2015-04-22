import DS from 'ember-data';

export default DS.ActiveModelAdapter.extend({
  host: 'http://nonprofit-api.herokuapp.com'
});
