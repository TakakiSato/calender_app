<template>
  <td>
    <task-list />
    <task-add :targetDate="calcEveryDay()"/>
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
      index: {
        type: Number,
        required: true
      }
    },
    components: {
      TaskList,
      TaskAdd
    },
    methods: {
      calcEveryDay: function() {
        return moment(this.firstDayOfTargetWeek).add(this.index, 'd').format('YYYY-MM-DD')  // '2021-01-10T07:30:20+09:00'
      }
    }
  }
</script>
