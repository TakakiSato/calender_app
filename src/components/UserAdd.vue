<template>
  <div>
    <div v-if="!isUserAdd && !isEditing && !titleExists" @click="startUserAdd">+ ユーザを追加する</div>
    <form :class="classList" @submit.prevent="addUser" v-if="isUserAdd || titleExists">
      <input v-model="name"
      type="text"
      class="input"
      placeholder="ユーザ名を入力してください"
      @focusin="startEditng"
      @focusout="finishEditing"
      >

      <button type="submit" class="button" v-if="isEditing || titleExists">
        Add
      </button>
    </form>
  </div>
</template>

<script>
  import moment from 'moment'

  export default {
    data: function() {
      return {
        name: '',
        isEditing: false,
        isUserAdd: false
      }
    },
    computed: {
      classList() {
        const classList = ['addlist']
        if (this.isEditing) {
          classList.push('is-focused')
        }
        if (this.titleExists) {
          classList.push('addable')
        }
        return classList
      },
      titleExists() {
        return this.name.length > 0
      }
    },
    methods: {
      addUser: function() {
        this.$store.dispatch('addUser', {id: moment().unix(), name: this.name})
        this.name = ''
      },
      startEditng() {
        this.isEditing = true
      },
      finishEditing() {
        this.isEditing = false
        this.finishUserAdd()
      },
      startUserAdd() {
        this.isUserAdd = true
      },
      finishUserAdd() {
        this.isUserAdd = false
      },
    }
  }
</script>