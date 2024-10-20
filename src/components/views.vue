<template>
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
</template>

<script>
import {
  f7,
  useStore,
  f7ready
} from 'framework7-vue';
import { ref, onMounted } from 'vue';
export default{
    setup() {
        const isLoading = ref(true);
        const user = useStore('userGetter'); 

        let errorNotify;

        f7.store.dispatch('auth')
            .then(() => {
                isLoading.value = false;
            })
            .catch(error => {
                 f7ready((f7) => {
                function auth() {
                    f7.store.dispatch('auth')
                    .then(() => {
                        isLoading.value = false;
                        return;
                    })
                    .catch(error => {
                        if (!errorNotify) {
                                    errorNotify = f7.notification.create({
                                    title: 'Проблемы с подключением',
                                    titleRightText: 'сейчас',
                                    subtitle: 'Возможные технические работы или неполадки на стороне сервиса',
                                    text: 'Попытка повторного подключения...',
                                    closeTimeout: 3000,
                                    });
                                }
                                errorNotify.open()
                                setTimeout(auth, 5000)
                            })
                }
                auth()
            });
            });

        return {isLoading}
    }

};


</script>

