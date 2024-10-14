<template>
  <f7-page name="home">
    <!-- Top Navbar -->
    <f7-navbar>
      <f7-nav-title>Gramitei <span class="subtitle-nav">Market</span></f7-nav-title>
      <f7-nav-right>
        <f7-link icon-ios="f7:add" icon-md="material:add" panel-open="right"></f7-link>
      </f7-nav-right>
    </f7-navbar>

    <form data-search-container=".search-list" data-search-in=".item-title" class="searchbar searchbar-init">
      <div class="searchbar-inner">
        <div class="searchbar-input-wrap">
          <input type="search" placeholder="Search" />
          <i class="searchbar-icon"></i>
          <span class="input-clear-button"></span>
        </div>
        <span class="searchbar-disable-button">Cancel</span>
        <f7-button round popup-open="#my-popup"><f7-icon material="tune"></f7-icon></f7-button>
      </div>
    </form>

    <!-- Page content

    <f7-block-title>Navigation</f7-block-title>
    <f7-list strong inset dividersIos>
      <f7-list-item link="/about/" title="About"></f7-list-item>
      <f7-list-item link="/form/" title="Form"></f7-list-item>
    </f7-list>

    <f7-block-title>Modals</f7-block-title>
    <f7-block class="grid grid-cols-2 grid-gap">
      <f7-button fill popup-open="#my-popup">Popup</f7-button>
      <f7-button fill login-screen-open="#my-login-screen">Login Screen</f7-button>
    </f7-block>

    <f7-block-title>Panels</f7-block-title>
    <f7-block class="grid grid-cols-2 grid-gap">
      <f7-button fill panel-open="left">Left Panel</f7-button>
      <f7-button fill panel-open="right">Right Panel</f7-button>
    </f7-block>
  -->
  <f7-block-title>Предложения</f7-block-title>
    <f7-list strong inset dividersIos>
      <f7-list-item
        title="Требуется партнер"
        after="1200 RUB"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus."
        media-list
        link="/dynamic-route/blog/45/post/125/?foo=bar#about"
      >

      <f7-list-item-subtitle><f7-badge color="green">4.2<f7-icon material="star" size="13px"></f7-icon></f7-badge><f7-badge>Покупка</f7-badge></f7-list-item-subtitle>
    
    </f7-list-item>
    <f7-list-item
    title="Требуется партнер"
    after="1200 RUB"
    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus."
    media-list
    link="/dynamic-route/blog/45/post/125/?foo=bar#about"
  >

  <f7-list-item-subtitle><f7-badge color="green">4.2<f7-icon material="star" size="13px"></f7-icon></f7-badge><f7-badge>Покупка</f7-badge></f7-list-item-subtitle>

  </f7-list-item>
  <f7-list-item
  title="Требуется партнер"
  after="1200 RUB"
  text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus."
  media-list
  link="/dynamic-route/blog/45/post/125/?foo=bar#about"
>

  <f7-list-item-subtitle><f7-badge color="green">4.2<f7-icon material="star" size="13px"></f7-icon></f7-badge><f7-badge>Покупка</f7-badge></f7-list-item-subtitle>

  </f7-list-item>

    </f7-list>
  </f7-page>
</template>