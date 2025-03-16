// component.js
import Component from '@ember/component';
import { withPluginApi } from 'discourse/lib/polymer-utils';

export default Component.extend({
  template: `<div class="my-statistics">
    Registered users: {{registeredUsers}}
    <br>
    Jobs group members: {{jobsMembers}}
  </div>`,
  registeredUsers: null,
  jobsMembers: null,

  didInsertElement() {
    this._super(...arguments);
    const api = withPluginApi('0.1');
    $.getJSON('/groups/jobs.json').then((response) => {
      this.set('registeredUsers', api.site.user_count);
      this.set('jobsMembers', response.members_count || 0);
    }).catch((error) => {
      console.error('Error fetching data:', error);
      this.set('jobsMembers', 'N/A');
    });
  }
});