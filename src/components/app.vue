<template>
  <f7-app v-bind="f7params">
    <f7-view id="view-preloader" name="preloader" tab url="/preloader/" v-if="isLoading"></f7-view>

    <!-- Views/Tabs container -->
    <f7-views tabs class="safe-areas" v-show="!isLoading">
      <!-- Tabbar for switching views-tabs -->
      <f7-toolbar tabbar icons bottom>
        <f7-link tab-link="#view-menu" icon-ios="f7:square_list_fill" icon-md="material:menu" text="Меню"></f7-link> 
        
        <f7-link tab-link="#view-home" tab-link-active icon-ios="f7:house_fill" icon-md="material:store" text="Маркет"></f7-link>
        
        <f7-link tab-link="#view-settings" icon-ios="f7:gear" icon-md="material:person" text="Профиль"></f7-link>
      </f7-toolbar>

      <!-- Your main view/tab, should have "view-main" class. It also has "tab-active" class -->
      <f7-view main tab-active id="view-home" name="home" tab url="/" :browser-history="true"></f7-view>
   
      <!-- Catalog View -->
      <f7-view id="view-menu" name="menu" tab url="/menu/"></f7-view>
  
      <!-- Settings View -->
      <f7-view id="view-settings" name="settings" tab url="/settings/"></f7-view>
  
    </f7-views>
  
  
      <!-- Popup -->
      <f7-popup id="my-popup">
        <f7-view>
          <f7-page>
            <f7-navbar title="Popup">
              <f7-nav-right>
                <f7-link popup-close>Close</f7-link>
              </f7-nav-right>
            </f7-navbar>
            <f7-block>
              <p>Popup content goes here.</p>
            </f7-block>
          </f7-page>
        </f7-view>

      </f7-popup>

    </f7-app>
</template>
<script>
  import { ref, onMounted } from 'vue';
  import { f7, f7ready } from 'framework7-vue';


  import routes from '../js/routes.js';
  import store from '../js/store';

  export default {
    props: {
      f7route: Object,
      f7router: Object,
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
      let notificationFull;


                  
      function auth() {
            fetch('https://reqres.in/api/users/200')
          .then(response => {
            if (!response.ok) {
              if (!notificationFull) {
              notificationFull = f7.notification.create({
                  title: 'Проблемы с подключением',
                  titleRightText: 'сейчас',
                  subtitle: 'Возможные технические работы или неполадки на стороне сервиса',
                  closeTimeout: 3000,
                });
              }
                notificationFull.open();
                setTimeout(() => {
                  auth();
                }, 5000);
                return;
              }
            response.json()
          })
          .then(commits => {
            console.log(commits);
          });
      }



      auth();

  

      return {
        f7params,
        username,
        password,
        isLoading
      }
    },
  }
</script>