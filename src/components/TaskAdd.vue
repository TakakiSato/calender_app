<template>
  <form :class="classList" @submit.prevent="addTask">
    <div class="add-inline">
      <input v-model="task_name"
      type="text"
      class="input is-small"
      placeholder=+タスクを追加する
      @focusin="startEditng"
      @focusout="finishEditing"
      >
      <button type="submit" class="button is-small" v-if="isEditing || titleExists">
        OK!
      </button>
    </div>
  </form>
</template>

<script>
  export default {
    data: function() {
      return {
        task_name: '',
        isEditing: false,
      }
    },
    props: {
      target_date: {
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
        return this.task_name.length > 0
      }
    },
    methods: {
      addTask: function() {
        this.$store.dispatch('addTask', {task: this.task_name, target_date: this.target_date, user_index:this.user_index})
        this.task_name = ''
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

<style>
.add-inline {
  display:inline-flex
}
</style>