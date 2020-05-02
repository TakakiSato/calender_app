import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const savedLists = localStorage.getItem('trello-lists')

const store = new Vuex.Store({
  state: {
    lists: savedLists ? JSON.parse(savedLists): [
    {
      title: 'Backlog',
      cards: [
      { body: 'English' },
      { body: 'Mathematics' },
      ]
    },
    {
      title: 'Todo',
      cards: [
      { body: 'Science' }
      ]
    },
    {
      title: 'Doing',
      cards: []
    }
    ],
  },
  mutations: {
    addListMutation(state, payload) {
      state.lists.push({title: payload.title, cards:[]})
    },
    removeListMutation(state, payload) {
      state.lists.splice(payload.listIndex, 1)
    },
    addCardToListActionMutation(state, payload) {
      state.lists[payload.listIndex].cards.push({body: payload.body})
    },
    removeCardFromListMutation(state, payload) {
      state.lists[payload.listIndex].cards.splice(payload.cardIndex, 1)
    },
    updateListMutation(state, payload) {
      state.lists = payload.lists
    }
  },
  actions: {
    addListAction(context, payload) {
      context.commit('addListMutation', payload)
    },
    removeListAction(context, payload) {
      context.commit('removeListMutation', payload)
    },
    addCardToListAction(context, payload) {
      context.commit('addCardToListActionMutation', payload)
    },
    removeCardFromListAction(context, payload) {
      context.commit('removeCardFromListMutation', payload)
    },
    updateListAction(context, payload) {
      context.commit('updateListMutation', payload)
    }
  },
  modules: {
  },
  getters: {
    totalCardCount(state) {
      let count = 0
      state.lists.map(content => count += content.cards.length)
      return count
    },
  },
})

store.subscribe((mutation, state) => {
  localStorage.setItem('trello-lists', JSON.stringify(state.lists))
})

export default store