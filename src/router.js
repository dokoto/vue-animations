import Vue from 'vue';
import Router from 'vue-router';
import Menu from './views/Menu.vue';
import Slide from './views/Slide.vue';
import Indexes from './views/Indexes.vue';
import Indexes2 from './views/Indexes2.vue';
import FlipAnimation from './views/FlipAnimation.vue';
import Test1 from './views/Test1.vue';
import Scroll from './views/Scroll.vue';

Vue.use(Router);
export default new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      name: 'menu',
      path: '/',
      components: { container: Menu }
    },
    {
      name: 'menu:slide',
      path: '/menu/slide',
      components: { container: Slide }
    },
    {
      name: 'indexes',
      path: '/menu/indexes',
      components: { container: Indexes }
    },
    {
      name: 'indexes2',
      path: '/menu/indexes2',
      components: { container: Indexes2 }
    },
    {
      name: 'FlipAnimation',
      path: '/menu/FlipAnimation',
      components: { container: FlipAnimation }
    },
    {
      name: 'scroll',
      path: '/menu/scroll',
      components: { container: Scroll }
    },
    {
      name: 'test1',
      path: '/menu/test1',
      components: { container: Test1 }
    }
  ]
});
