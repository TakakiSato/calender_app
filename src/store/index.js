import Vue from 'vue'
import Vuex from 'vuex'
import moment from 'moment'

Vue.use(Vuex)

const savedLists = localStorage.getItem('calender-app-data')

const store = new Vuex.Store({
  state: {
    users: savedLists ? JSON.parse(savedLists) : [
      { user_id: 'sample',
        name: 'サンプルユーザ',
        [moment(new Date).format('YYYY-MM-DD')]: [{task: '〇〇PJ会議'},{task: '☓☓さん採用面談'},{task: '□□さんとランチ'}],
        [moment(new Date).add('days', 1).format('YYYY-MM-DD')]: [{task: '△△県出張'}],
        [moment(new Date).add('days', 2).format('YYYY-MM-DD')]: [{task: '△△県出張'}],
        [moment(new Date).add('days', 3).format('YYYY-MM-DD')]: [{task: '休み'},{task: '映画'},{task: 'ジム'}],
        [moment(new Date).add('days', 4).format('YYYY-MM-DD')]: [{task: '◯◯社訪問'}, {task: '☓☓会飲み'}],
      }
    ]
  },
  mutations: {
    addUser(state, payload) {
      state.users.push({user_id: payload.id, name: payload.name })
    },
    removeUser(state, payload) {
      //delete state.users[payload.user_id]
      state.users.splice(payload.user_index, 1)
    },
    addTask(state, payload) {
      state.users[payload.user_index][payload.targetDate].push({task: payload.task})
      //データの変更を伝えるための悪い実装。https://qiita.com/rh_taro/items/5c2af729dc7e3d6bd28a
      state.users.splice()
    },
    removeTask(state, payload) {
      state.users[payload.dates].tasks.splice(payload.cardIndex, 1)
    },
    saveNowTaskState(state, payload) {
      state.users = payload.users
    },
    addDateField(state, payload) {
      if (!state.users[payload.user_index][payload.target_date]) {
       state.users[payload.user_index][payload.target_date] = []
     }
   }
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
    saveNowTaskState(context, payload) {
      context.commit('saveNowTaskState', payload)
    },
    addDateField(context, payload) {
      context.commit('addDateField', payload)
    }
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