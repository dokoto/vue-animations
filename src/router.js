import Vue from 'vue';
import Router from 'vue-router';
import Menu from './views/Menu.vue';
import Slide from './views/Slide.vue';
import Indexes from './views/Indexes.vue';
import Indexes2 from './views/Indexes2.vue';
import Misc1 from './views/Misc1.vue';

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
      name: 'misc1',
      path: '/menu/misc1',
      components: { container: Misc1 }
    }
  ]
});
