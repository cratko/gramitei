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
    offersState: []
  },
  actions: {
    auth({ state }) {
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
    getOffers({ state }, {params}) {
      return fetch(url + `private/offers/getOffers?${params.toString()}`, {
        method: "get",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + state.userState.token,
        },
      })
      .then(res => {
        if (!res.ok) {
          throw new Error('Failed to fetch offers');
        }
        return res.json();
      })
      .then(offers => {
        // assign new users to store state.categoriesState
        state.offersState = offers;
        console.log(offers)
      });
    },
    firstLoad({ state, dispatch }) {
      return dispatch('auth') // Start by authenticating
        .then(() => {
          return dispatch('getCategories'); // Fetch categories after successful auth
        })
        .then(() => {
          const getOffersParams = new URLSearchParams({
            sort_by: "rating",
          });
          return dispatch('getOffers', getOffersParams); // Fetch offers after fetching categories
        })
        .catch(error => {
          // This catch will handle any errors from auth, getCategories, or getOffers
          console.log(error)
          throw new Error('Failed to load data: ' + error.message);
        });
    }
  },
  getters: {
    userGetter({ state }) {
      return state.userState;
    },
    offersGetter({state}) {
      return state.offersState;
    },
  },
});

export default store;