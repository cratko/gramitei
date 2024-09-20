<template>
  <f7-app v-bind="f7params">

    <!-- Left panel with cover effect-->
    <f7-panel right cover dark>
      <f7-view>
        <f7-page>
          <f7-navbar title="Left Panel"></f7-navbar>
          <button class="button button-round">Добавить товар</button>
          <button class="button button-round">Round</button>
  
        </f7-page>
      </f7-view>
    </f7-panel>
  
    <!-- Views/Tabs container -->
    <f7-views tabs class="safe-areas">
      <!-- Tabbar for switching views-tabs -->
      <f7-toolbar tabbar icons bottom>
        <f7-link tab-link="#view-home" tab-link-active icon-ios="f7:house_fill" icon-md="material:apps" text="Маркет"></f7-link>
        <!-- <f7-link tab-link="#view-catalog" icon-ios="f7:square_list_fill" icon-md="material:add" text="Catalog"></f7-link> -->
        <f7-link tab-link="#view-settings" icon-ios="f7:gear" icon-md="material:person" text="Профиль"></f7-link>
      </f7-toolbar>
  
      <!-- Your main view/tab, should have "view-main" class. It also has "tab-active" class -->
      <f7-view id="view-home" main tab tab-active url="/"></f7-view>
  
      <!-- Catalog View -->
      <f7-view id="view-catalog" name="catalog" tab url="/catalog/"></f7-view>
  
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
          browserHistory: true,
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

      const alertLoginData = () => {
        f7.dialog.alert('Username: ' + username.value + '<br>Password: ' + password.value, () => {
          f7.loginScreen.close();
        });
      }
      onMounted(() => {
        f7ready(() => {


          // Call F7 APIs here
        });
      });

      return {
        f7params,
        username,
        password,
        alertLoginData
      }
    }
  }
</script>