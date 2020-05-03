<template>
  <td>
    <task-list />
    <task-add :targetDate="calcEveryDay()" :user="user"/>
  </td>
</template>

<script>
  import TaskList from './TaskList'
  import TaskAdd from './TaskAdd'
  import moment from 'moment'

  export default {
    props: {
      firstDayOfTargetWeek: {
        type: String,
        required: true
      },
      user: {
        type: Object,
        required: true
      },
    },
    components: {
      TaskList,
      TaskAdd
    },
    methods: {
      calcEveryDay: function() {
        return moment(this.firstDayOfTargetWeek).add(this.index, 'd').format('YYYY-MM-DD')
      }
    }
  }
</script>
