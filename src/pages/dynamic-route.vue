<template>
  <f7-page>
    <f7-navbar title="Dynamic Route">
      <f7-nav-right>
        <f7-link icon-md="material:close" @click="f7router.back()"></f7-link>
      </f7-nav-right>
    </f7-navbar>
    <f7-block strong inset>
      <ul>
        <li><b>Url:</b> {{ f7route.url }}</li>
        <li><b>Path:</b> {{ f7route.path }}</li>
        <li><b>Hash:</b> {{ f7route.hash }}</li>
        <li>
          <b>Params:</b>
          <ul>
            <li v-for="(value, key) in f7route.params" :key="key">
              <b>{{ key }}:</b> {{ value }}
            </li>
          </ul>
        </li>
        <li>
          <b>Query:</b>
          <ul>
            <li v-for="(value, key) in f7route.query" :key="key">
              <b>{{ key }}:</b> {{ value }}
            </li>
          </ul>
        </li>
        <li><b>Route:</b> {{ f7route.route.path }}</li>
      </ul>
    </f7-block>
    <f7-block strong inset>
      <f7-link @click="f7router.back()">Go back via Router API</f7-link>
    </f7-block>
  </f7-page>
</template>
<script>
import { f7 } from 'framework7-vue';




export default {
  props: {
    f7route: Object,
    f7router: Object,
  },
  setup() {
    const tg = window.Telegram.WebApp;

    // Show the back button
    tg.BackButton.show();

    // Define what happens when the back button is clicked
    const goBack = () => {
      f7.view.main.router.navigate('/');
      tg.BackButton.hide();
    };

    tg.BackButton.onClick(goBack);
  }
};
</script>
