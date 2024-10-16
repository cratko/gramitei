
import { createStore } from 'framework7/lite';

const url = 'http://localhost:3001/';
const  tg = window.Telegram.WebApp;

const store = createStore({
  state: {
    categoriesState: [],
    userState: []
  },
  actions: {
    auth({ state }) {
      fetch(url + 'public/user/auth', {
        method: "post",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          telegram_init_data: tg.initData
        })
      })
      .then( response => {
        if (!response.ok) {
          return false
        }
        return response.json()

      })
      .then(commits => {
        state.userState.token = commits.token
        state.userState.data = tg.initDataUnsafe.user;
        dispatch('getCategories');
      });
    },
    getCategories({ state }) {
            fetch(url + 'private/offers/getCategories', {
              method: "get",
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + state.userState.token
              }})
          .then((res) => res.json())
          .then((categories) => {
            // assign new users to store state.users
            state.categoriesState = categories;
    })
  },
},
  getters: {
    userGetter({ state }) {
      return state.userState;
    }
  }
})
export default store;
