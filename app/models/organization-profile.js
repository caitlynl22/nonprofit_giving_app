import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  mission: DS.attr('string'),
  description: DS.attr('string'),
  image_url: DS.attr('string'),
  website: DS.attr('string'),
  address: DS.attr('string'),
  contact: DS.attr('string'),
  ein: DS.attr('string'),
  // campaigns: DS.hasMany('campaign')
});
