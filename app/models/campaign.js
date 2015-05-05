import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  image_url: DS.attr('string'),
  description: DS.attr('string'),
  goal: DS.attr('number'),
  organization_profile: DS.belongsTo('organization_profile')
});
