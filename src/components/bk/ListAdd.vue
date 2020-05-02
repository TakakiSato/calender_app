<template>
    <form :class="classList" @submit.prevent="addList">
    <input v-model="title"
    type="text"
    class="text-input"
    placeholder="Add new list"
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
    data: function() {
      return {
        title: '',
        isEditing: false,
      }
    },
    computed: {
      classList() {
        const classList = ['addlist']
        if (this.isEditing) {
          classList.push('active')
        }
        if (this.titleExists) {
          classList.push('addable')
        }
        return classList
      },
      titleExists() {
        return this.title.length > 0
      }
    },
    methods: {
      addList: function() {
        this.$store.dispatch('addListAction', {title: this.title})
        this.title = ''
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