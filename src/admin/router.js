import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import about from './components/pages/about';
import works from './components/pages/works';
import comments from './components/pages/comments';
import login from './components/pages/login';

const routes = [
  {
    path: '/admin',
    component: about
  },
  {
    path: '/admin/works',
    component: works
  },
  {
    path: '/admin/comments',
    component: comments
  },
  {
    path: '/admin/login',
    component: login
  }
];

export default new VueRouter({ routes, mode: 'history' });