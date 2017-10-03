import Hello from '@/components/Hello';
import Home from '@/components/Home';
import TweenExample from '@/components/TweenExample';
import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/hello',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/TweenExample',
      name: 'TweenExample',
      component: TweenExample
    }
  ]
});
