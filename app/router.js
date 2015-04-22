import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('organization_profiles', { path: '/' }, function() {
    this.route('show', { path: 'organization_profiles/:id' });
  });
  this.resource('organizations', { path: '/account'});
});

export default Router;
