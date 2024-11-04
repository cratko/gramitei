<template>
  <f7-page name="Settings">
    <f7-navbar title="Infinite Virtual List"></f7-navbar>
    <f7-list class="virtual-list" ref="virtualList"></f7-list>
  </f7-page>
</template>

<script>
import { f7 } from 'framework7-vue';

export default {
  data() {
    return {
      items: [], // Массив для хранения элементов
      totalItems: 10000, // Общее количество элементов
      itemHeight: 63, // Высота одного элемента
    };
  },
  mounted() {
    this.loadItems(0, 20); // Загружаем первые 20 элементов
    this.initializeVirtualList();
  },
  methods: {
    loadItems(startIndex, count) {
      for (let i = startIndex; i < startIndex + count && i < this.totalItems; i++) {
        this.items.push({ title: `Item ${i + 1}`, subtitle: `Subtitle ${i + 1}` });
      }
    },
    initializeVirtualList() {
      const virtualList = f7.virtualList.create({
        el: this.$refs.virtualList,
        items: this.items,
        itemHeight: this.itemHeight,
        searchAll: (query, items) => {
          // Функция поиска
          return items.filter(item => item.title.toLowerCase().includes(query.toLowerCase()));
        },
        renderExternal: (vl, vlData) => {
          // Обновление данных при прокрутке
          if (vlData.items.length < this.totalItems) {
            this.loadItems(vlData.items.length, 20); // Загружаем следующие 20 элементов
          }
        },
      });
    },
  },
};
</script>