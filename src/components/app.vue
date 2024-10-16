<template>
  <f7-app v-bind="f7params">
    <Views></Views>


    </f7-app>
</template>
<script>
  import { ref, onMounted } from 'vue';
  import { f7, f7ready } from 'framework7-vue';


  import routes from '../js/routes.js';
  import store from '../js/store';
  import { useStore } from 'framework7-vue';

import Categories from './categories.vue';
import Views from './views.vue';

  export default {
    props: {
      f7route: Object,
      f7router: Object,
    },
    components: {
      Categories,
      Views
    },
    setup() {

      // Framework7 Parameters
      const f7params = {
        name: 'gramitei', // App name
        theme: 'auto', // Automatic theme detection
        colors: {
          primary: '#d97878',
        },
        darkMode: true,
        view: {
          //browserHistory: true,
          //browserHistorySeparator: "",
        },

        // App store
        store: store,
        // App routes
        routes: routes,

        // Register service worker (only on production build)
        serviceWorker: process.env.NODE_ENV ==='production' ? {
          path: '/service-worker.js',
        } : {},
      };
      // Login screen data
      const username = ref('');
      const password = ref('');
      const isLoading = ref(true);



      

  

      return {
        f7params,
        username,
        password,
        isLoading
      }
    },
  }
</script>