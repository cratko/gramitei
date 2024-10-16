
import { createStore } from 'framework7/lite';

const url = 'http://localhost:3001/';
const  tg = window.Telegram.WebApp;

const store = createStore({
  state: {
    categories: [],
    user: []
  },
  getters: {
    products({ state }) {
      return state.products;
    }
  },

  actions: {
    auth({ state }) {
      fetch(url + 'public/user/auth', {
        method: "post",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        //make sure to serialize your JSON body
        body: JSON.stringify({
          telegram_init_data: tg.initData
        })
      })
      .then( (response) => {
         console.log(response)
         state.user = response
      });
    },
    getCategories({ state }) {
            fetch('some-url')
          .then((res) => res.json())
          .then((users) => {
            // assign new users to store state.users
            state.users = users;
    })
  },
  },
})
export default store;
