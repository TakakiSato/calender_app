<template>
  <form :class="classList" @submit.prevent="addCardToList">
    <input v-model="body"
    type="text"
    class="text-input"
    placeholder="Add new card"
    @focusin="startEditng"
    @focusout="finishEditing"
    >
    <button type="submit" class="add-button" v-if="isEditing || titleExists">
      Add
    </button>
  </form>
</template>

<script>
  export default {
    props: {
      listIndex: {
        type: Number,
        required: true,
      }
    },
    data: function() {
      return {
        body: '',
        isEditing: false,
      }
    },
    computed: {
      classList() {
        const classList = ['addcard']
        if (this.isEditing) {
          classList.push('active')
        }
        if (this.titleExists) {
          classList.push('addable')
        }
        return classList
      },
      titleExists() {
        return this.body.length > 0
      }
    },
    methods: {
      addCardToList: function() {
        this.$store.dispatch('addCardToListAction', { body: this.body, listIndex: this.listIndex })
        this.body = ''
      },
      startEditng() {
        this.isEditing = true
      },
      finishEditing() {
        this.isEditing = false
      }
    }
  }
</script>