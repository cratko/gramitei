<template>
  <f7-page name="home">
    <!-- Top Navbar -->
    <f7-navbar>
      <f7-nav-title>Gramitei <span class="subtitle-nav">Market</span></f7-nav-title>
      <f7-nav-right>
        <f7-link icon-ios="f7:add" icon-md="material:refresh" panel-open="right"></f7-link>
      </f7-nav-right>
    </f7-navbar>

    <f7-popup id="categories-filter">
      <f7-view>
        <f7-page>
          <f7-navbar title="Фильтр">
            <f7-nav-right>
              <f7-link popup-close>Close</f7-link>
            </f7-nav-right>
          </f7-navbar>
          <Categories></Categories>
        </f7-page>
      </f7-view>

    </f7-popup>

    <form data-search-container=".search-list" data-search-in=".item-title" class="searchbar searchbar-init">
      <div class="searchbar-inner">
        <div class="searchbar-input-wrap">
          <input type="search" placeholder="Search" />
          <i class="searchbar-icon"></i>
          <span class="input-clear-button"></span>
        </div>
        <span class="searchbar-disable-button">Cancel</span>
        <f7-button round popup-open="#categories-filter"><f7-icon material="tune"></f7-icon></f7-button>
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
  <f7-list virtual-list
  :virtual-list-params="{
    items,
    renderExternal,
    height: 10,
  }">
    <f7-list-item
      v-for="offer in offers"
      :key="offer.uuid"
      :virtual-list-index="offer.Uuid"
      :title="offer.Title"
      :text="offer.Description"
      media-list
      :link="`/dynamic-route/blog/${offer.OwnerId}/post/${offer.Uuid}/?foo=bar#about`"
    >
      <f7-list-item-subtitle>
        <f7-badge
            v-for="(item, index) in getCategories(offer.CategoryIds)" 
            :key="index"
            :color="item.color" 
          >
            {{ item.title }} <!-- Display each category title -->
          </f7-badge>
      </f7-list-item-subtitle>
      <template #after>
        <f7-badge :color="getBadgeColor(offer.OfferRating)">
          {{ offer.OfferRating }}
          <f7-icon material="star" size="13px"></f7-icon>
        </f7-badge> <!-- Move badge here -->
      </template>
      <hr>
    </f7-list-item>
  </f7-list>
  </f7-page>

</template>

<script setup>
  import Categories from '../components/categories.vue';
  import {
  f7,
  useStore,
  f7ready
} from 'framework7-vue';
import { ref, onMounted } from 'vue';

const offers = useStore('offersGetter')
const categories = useStore('categoriesGetter')
const items = ref();
items.value = offers.value;

// Function to get badge color based on rating
function getBadgeColor(rating) {
  if (rating >= 4) return 'green';
  if (rating > 2) return 'orange';
  return 'red';
}

console.log(categories.value)
console.log(offers.value)

function getCategories(categoryIds) {
  // Map through the categoryIds to find matching categories
  const categoriesInfo = categoryIds.map(catId => {
    const category = categories.value.find(cat => cat.Id === catId); // Find the category by Id
    return category ? { title: category.Title, color: category.Color } : null; // Return title and color or null
  });

  // Filter out any null values (in case some IDs do not match any category)
  return categoriesInfo.filter(info => info !== null);
}

function renderExternal(vl, vlData) {
  console.log("Rendered")
}
</script>