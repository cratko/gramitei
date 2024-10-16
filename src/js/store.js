import { createStore } from 'framework7/lite';

const url = 'http://localhost:3001/';
const tg = window.Telegram.WebApp;

const store = createStore({
  state: {
    categoriesState: [],
    userState: {
      token: null,
      data: null,
    },
  },
  actions: {
    auth({ state, dispatch }) {
      return fetch(url + 'public/user/auth', {
        method: "post",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          telegram_init_data: tg.initData,
        }),
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Authentication failed');
        }
        return response.json();
      })
      .then(commits => {
        state.userState.token = commits.token;
        state.userState.data = tg.initDataUnsafe.user;
        // Dispatch getCategories only after successful authentication
        return dispatch('getCategories');
      });
    },
    getCategories({ state }) {
      return fetch(url + 'private/offers/getCategories', {
        method: "get",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + state.userState.token,
        },
      })
      .then(res => {
        if (!res.ok) {
          throw new Error('Failed to fetch categories');
        }
        return res.json();
      })
      .then(categories => {
        // assign new users to store state.categoriesState
        state.categoriesState = categories;
      });
    },
  },
  getters: {
    userGetter({ state }) {
      return state.userState;
    },
  },
});

export default store;