<template>
  <td class='date-frame'>
    <draggable class='draggable-area' group="task" :list="user[calcEveryDay()]" @end="$emit('change')">
      <task v-for="(task, task_index) in user[calcEveryDay()]" :key="task_index" :task="task" :user_index="user_index" :target_date="calcEveryDay()" :task_index="task_index"/>
    </draggable>
    <div class='task-add'>
      <task-add :target_date="calcEveryDay()" :user_index="user_index"/>
    </div>
    <div v-if="addDateField"></div>
  </td>
</template>

<script>
  import Task from './Task'
  import TaskAdd from './TaskAdd'
  import moment from 'moment'
  import draggable from 'vuedraggable'

  export default {
    props: {
      firstDayOfTargetWeek: {
        type: String,
        required: true
      },
      user_index :{
        type: Number,
        required: true
      },
      date_index :{
        type: Number,
        required: true
      },
      user :{
        type: Object,
        required: true
      }
    },
    components: {
      Task,
      TaskAdd,
      draggable
    },
    computed: {
      addDateField: function(){
        this.$store.dispatch('addDateField', {user_index: this.user_index, target_date: this.calcEveryDay()})
        return true;
      }
    },
    methods: {
      calcEveryDay: function() {
        return moment(this.firstDayOfTargetWeek).add(this.date_index, 'd').format('YYYY-MM-DD')
      }
    }
  }
</script>

<style>
.date-frame {
  height: 300px;

}
.draggable-area {
  margin: 0;
  height: 90%;
}
.task-add {
  height: 10%;
  color: #D0D1CD;
}
</style>








