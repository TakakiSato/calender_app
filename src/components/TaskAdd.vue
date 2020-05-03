<template>
  <form :class="classList" @submit.prevent="addTask">
    <input v-model="taskName"
    type="text"
    class="input is-small"
    placeholder=+タスクを追加する
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
        taskName: '',
        isEditing: false,
      }
    },
    props: {
      targetDate: {
        type: String,
        required: true
      },
      user_index: {
        type: Number,
        required: true
      },
    },
    computed: {
      classList() {
        const classList = ['task-add']
        if (this.isEditing) {
          classList.push('is-focused')
        }
        if (this.titleExists) {
          classList.push('addable')
        }
        return classList
      },
      titleExists() {
        return this.taskName.length > 0
      }
    },
    methods: {
      addTask: function() {
        this.$store.dispatch('addTask', {task: this.taskName, targetDate: this.targetDate, user_index:this.user_index})
        this.taskName = ''
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