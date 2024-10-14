<template>
  <f7-page name="menu">
    <f7-navbar>
      <f7-nav-title>Gramitei <span class="subtitle-nav">Menu</span></f7-nav-title>
      <f7-nav-right>
        <f7-link icon-ios="f7:add" icon-md="material:add" panel-open="right"></f7-link>
      </f7-nav-right>
    </f7-navbar>
    <f7-block>
      <f7-block-title>Маркет</f7-block-title>
      <f7-list strong dividers-ios outline-ios inset-md>
      
        <f7-list-item
          title="Добавить предложение"
          link="/test/"
          media
        >
        <template #media>
          <f7-icon material="add_2" size="18px"></f7-icon>
        </template>
      </f7-list-item>
      </f7-list>
    </f7-block>
    
    <f7-block>
      <f7-block-title>Другое</f7-block-title>
      <f7-list strong dividers-ios outline-ios inset-md>
      
        <f7-list-item
          title="Гарант"
          link="#"
        >
        <f7-list-item-subtitle><f7-badge>СКОРО</f7-badge></f7-list-item-subtitle>
        <template #media>
          <f7-icon material="verified_user" size="18px"></f7-icon>
        </template>
      </f7-list-item>

          <f7-list-item
          title="Форум"
          link="#"
        >
        <f7-list-item-subtitle><f7-badge>СКОРО</f7-badge></f7-list-item-subtitle>
        <template #media>
          <f7-icon material="forum" size="18px"></f7-icon>
        </template>
      </f7-list-item>

      <f7-list-item
      title="Черный список"
        link="#"
      >
      <f7-list-item-subtitle><f7-badge>СКОРО</f7-badge></f7-list-item-subtitle>
      <template #media>
          <f7-icon material="block" size="18px"></f7-icon>
        </template>
      </f7-list-item>

      <f7-list-item
      title="Рейтинг пользователей"
        link="#"
      >
      <f7-list-item-subtitle><f7-badge>СКОРО</f7-badge></f7-list-item-subtitle>
      <template #media>
          <f7-icon material="star" size="18px"></f7-icon>
        </template>
      </f7-list-item>

      <f7-list-item
      title="VPN"
        link="#"
      >
      <f7-list-item-subtitle><f7-badge>СКОРО</f7-badge></f7-list-item-subtitle>
      <template #media>
          <f7-icon material="wifi" size="18px"></f7-icon>
        </template>
      </f7-list-item>
      </f7-list>
    </f7-block>
  </f7-page>
</template>
<script>
import { useStore } from 'framework7-vue';
import store from '../js/store';

export default {
  setup() {

  },
};
</script>
