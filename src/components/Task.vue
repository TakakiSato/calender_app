<template>
  <div class=task-card-wap>
    <div class=task-card>
      <span class=close-button @click="removeTask">☓</span>
      <span class=task-name>{{task['task']}}</span>
    </div>
  </div>

</template>

<script>
  export default {
    props: {
      task: {
        type: Object,
        required: true
      },
      user_index: {
        type: Number,
        required: true
      },
      target_date: {
        type: String,
        required: true
      },
      task_index: {
        type: Number,
        required: true
      },
    },
    methods: {
      removeTask: function() {
        if(confirm('本当にこのタスクを削除しますか?')){
          this.$store.dispatch('removeTask', {task_index: this.task_index, user_index: this.user_index, target_date: this.target_date})
        }
      }
    }
  }
</script>

<style>
.task-card {
  margin-bottom: 2px;
  padding: 10px 10px 10px;
  background-color: #fff;
  border-radius: 8px;
  cursor: pointer;
  box-shadow:5px 0px 5px 0px #898989;
  position: relative;
}

.close-button {
  position: absolute;
  top: 0;
  right: 0;
  font-size: 1px;
  cursor: pointer;
  border-radius: 8px;
  background-color: silver;
  color: black;
  margin: 5px;
}
</style>