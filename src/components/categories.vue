<template>
    <f7-page>
      <f7-block-title>Выбранные категории</f7-block-title>
      <f7-block outline-ios class="no-padding-horizontal">
        <f7-treeview>
          <template v-for="item in treeData" :key="item.id">
            <f7-treeview-item :label="item.name" icon-f7="cube_box">
              <template #content-start>
                <f7-checkbox
                  v-model="checkboxes[item.id]"
                  :checked="checkboxes[item.id]"
                  :indeterminate="isIndeterminate(item)"
                  @change="updateCheckboxes(item)"
                />
              </template>
              <template v-if="item.children && item.children.length">
                <template v-for="child in item.children" :key="child.id">
                  <f7-treeview-item :label="child.name" icon-f7="tag">
                    <template #content-start>
                      <f7-checkbox
                        v-model="checkboxes[child.id]"
                        :checked="checkboxes[child.id]"
                        @change="updateCheckboxes(child)"
                      />
                    </template>
                  </f7-treeview-item>
                </template>
              </template>
            </f7-treeview-item>
          </template>
        </f7-treeview>
      </f7-block>
      {{ checkboxes }} <!-- Для отладки -->
    </f7-page>  
  </template>
  
  <script>
  import { ref } from 'vue'; // Импортируем ref
  
  export default {
    setup() {
      const checkboxes = ref({}); // Используем ref для checkboxes
      const treeData = ref([]); // Используем ref для treeData
  
      const fetchData = () => {
        const responseData = [
          { id: 14, parent_id: null, name: 'Тест' },
          { id: 18, parent_id: 14, name: 'Юзернеймы' },
          { id: 19, parent_id: 14, name: 'Готовые боты' },
          { id: 20, parent_id: null, name: 'Мануалы/Обучения' },
          // ... другие элементы
        ];
        treeData.value = buildTree(responseData); // Обновляем значение treeData

        responseData.forEach(item => {
        checkboxes.value[item.id] = false; // Устанавливаем значение false для каждого элемента
      });
      };
  
      const buildTree = (data) => {
        const tree = [];
        const mappedArr = {};
  
        data.forEach(item => {
          mappedArr[item.id] = { ...item, children: [] };
        });
  
        for (const id in mappedArr) {
          const item = mappedArr[id];
          if (item.parent_id === null) {
            tree.push(item); // Добавляем корневые элементы
          } else {
            if (mappedArr[item.parent_id]) {
              mappedArr[item.parent_id].children.push(item); // Добавляем дочерние элементы
            } else {
              console.warn(`Родитель с id ${item.parent_id} не найден для элемента ${item.name}`);
            }
          }
        }
  
        return tree;
      };
  
      const updateCheckboxes = (item) => {
  // Получаем текущее состояние чекбокса родителя
  const isChecked = !checkboxes.value[item.id]; // Переключаем состояние родительского чекбокса

  // Устанавливаем состояние родительского чекбокса
  checkboxes.value[item.id] = isChecked;

  // Если элемент имеет дочерние элементы, устанавливаем их состояние в соответствии с состоянием родителя
  if (item.children && item.children.length) {
    item.children.forEach(child => {
      checkboxes.value[child.id] = isChecked; // Устанавливаем состояние дочерних чекбоксов
    });
  }
  
  // Проверяем состояние всех дочерних элементов и обновляем состояние родителя
  if (item.parent_id !== null) {
    const parentItem = treeData.value.find(parent => parent.id === item.parent_id);
    if (parentItem) {
      const allChildrenChecked = parentItem.children.every(child => checkboxes.value[child.id]);
      checkboxes.value[parentItem.id] = allChildrenChecked; // Устанавливаем состояние родительского чекбокса
    }
  }
};

      const isIndeterminate = (item) => {
      if (!item.children || item.children.length === 0) return false;

      const childCheckboxes = item.children.map(child => checkboxes.value[child.id]);
      
      return childCheckboxes.includes(true) && childCheckboxes.includes(false);
    };
  
      fetchData(); // Получаем данные при создании компонента
  
      return { 
        checkboxes,
        treeData,
        updateCheckboxes,
        isIndeterminate
      };
    },
  };
  </script>
  
  <style scoped>
  /* Ваши стили */
  </style>