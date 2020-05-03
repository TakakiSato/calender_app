import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const savedLists = localStorage.getItem('calender-app-data')

const store = new Vuex.Store({
  state: {
    users: savedLists ? JSON.parse(savedLists): [
    {
      id: 'sample',
      name: 'サンプルユーザ',
      dates: [
          {
            date: '',
            tasks: [
            { task: 'タスク1'},
            { task: 'タスク2'},
            ]
          }
        ]
      }
    ],
  },

  mutations: {
    addUser(state, payload) {
      state.users.push({id: payload.id, name: payload.name, dates:{ tasks:[] }})
    },
    removeUser(state, payload) {
      state.users.splice(payload.index, 1)
    },
    addTask(state, payload) {
      console.log(payload);
      console.log(state.users);

      var useDateList = state.users.dates.map(function(row){
        return [ row["date"] ]
      }).reduce(function(a,b){
        return a.concat(b);
      });
      console.log(useDateList);
      var targetDateIndex = useDateList.indexOf(payload.targetDate)

      if (targetDateIndex) {
        state.users.dates[targetDateIndex].tasks.push({task: payload.task})
      } else {
        state.users.dates.push({date: payload.targetDate, tasks: [{task: payload.task}]})
      }
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