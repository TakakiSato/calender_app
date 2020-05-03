<template>
  <td>
    <task-add :targetDate="calcEveryDay()" :user_index="user_index"/>
    <div v-if="addDateField"></div>
    <draggable class='draggable-area' group="task" :list="user[calcEveryDay()]" @end="$emit('change')">
      <task v-for="(task, index) in user[calcEveryDay()]" :key="index" :task="task"/>
    </draggable>
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
.draggable-area {
  min-height: 150px
}
</style>