import Vue from 'vue';
import Router from 'vue-router';
import Page from './components/Page';
import PageRouter from './components/page-router';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Page',
      redirect: 'hello2',
      component: Page,
      children: [
        ...PageRouter
      ]
    },
  ]
})
