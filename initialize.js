// initialize.js
import { withPluginApi } from 'discourse/lib/polymer-utils';
import DiscourseComponent from './component';

export default function initialize() {
  withPluginApi('0.1', (api) => {
    if (api.currentUser?.currentRouteName === 'discovery.latest') {
      api.registerComponent('discourse-component', DiscourseComponent);
      api.attachComponent('discourse-component', 'afterHeader');
    }
  });
}