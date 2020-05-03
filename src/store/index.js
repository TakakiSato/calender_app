import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const savedLists = localStorage.getItem('calender-app-data')

const store = new Vuex.Store({
  state: {
    users: savedLists ? JSON.parse(savedLists) : {
      'sample': {
        name: 'サンプルユーザ',
        '2020-04-01': [
          { task: 'タスク1'},
          { task: 'タスク2'},
        ]
      }
    }
  },
  mutations: {
    addUser(state, payload) {
      console.log(payload);
      state.users[payload.id] = {name: payload.name }
      console.log(state.users)
    },
    removeUser(state, payload) {
      delete state.users[payload.user_id]
    },
    addTask(state, payload) {
      console.log(payload);
      console.log(JSON.stringify(state.users[payload.id]));
      console.log(state.users.dates);

      state.users.dates.push({date: payload.targetDate, tasks: [{task: payload.task}]})


    },
    removeTask(state, payload) {
      state.users[payload.dates].tasks.splice(payload.cardIndex, 1)
    },
  },
  actions: {
    addUser(context, payload) {
      context.commit('addUser', payload)
    },
    removeUser(context, payload) {
      context.commit('removeUser', payload)
    },
    addTask(context, payload) {
      context.commit('addTask', payload)
    },
    removeTask(context, payload) {
      context.commit('removeTask', payload)
    },

  },
  modules: {
  },
  getters: {
  },
})

store.subscribe((mutation, state) => {
  localStorage.setItem('calender-app-data', JSON.stringify(state.users))
})

export default store