import Vue from 'vue';
import Router from 'vue-router';
import Backbone from './views/Backbone.vue';
import Skill from './views/Skill.vue';

Vue.use(Router);

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'skill',
      component: Skill,
    },
		    {
		  path: '/backbone/:skillId',
		  name: 'backbone',
		  component: Backbone,
    },
  ],
});
