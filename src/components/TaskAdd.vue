<template>
  <form :class="classList" @submit.prevent="addTask">
    <input v-model="task"
    type="text"
    class="input is-small"
    placeholder=タスク入力
    @focusin="startEditng"
    @focusout="finishEditing"
    >

    <button type="submit" class="button is-small" v-if="isEditing || titleExists">
      Add
    </button>
  </form>
</template>

<script>
  export default {
    data: function() {
      return {
        task: '',
        isEditing: false,
      }
    },
    props: {
      targetDate: {
        type: String,
        required: true
      },
    },
    computed: {
      classList() {
        const classList = []
        if (this.isEditing) {
          classList.push('is-focused')
        }
        if (this.titleExists) {
          classList.push('addable')
        }
        return classList
      },
      titleExists() {
        return this.task.length > 0
      }
    },
    methods: {
      addTask: function() {
        this.$store.dispatch('addTask', {task: this.task, date: this.targetDate})
        this.task = ''
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