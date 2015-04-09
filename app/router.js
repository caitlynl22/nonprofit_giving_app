import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('organization_profiles', { path: '/'});
  this.route('organization_profiles');
});

Router.map(function() {
  this.resource('organizations', { path: '/account'});
});

export default Router.map(function() {
  this.route('organizations');
});
