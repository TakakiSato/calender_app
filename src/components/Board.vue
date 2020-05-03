<template>
  <section class="section container content">
    <h1>
      My Calendar
    </h1>
    <div>
      <datepicker v-model="targetDate" placeholder="日付を指定してください" :config="{ dateFormat: 'Y-m-d', static: true }"></datepicker>
      <calendar :firstDayOfTargetWeek="fetchFirstDayOfTargetWeek"/>
      <user-add />
    </div>
  </section>

</template>

<script>
  import Calendar from './Calendar'
  import UserAdd from './UserAdd'
  import datepicker from 'vue-bulma-datepicker'
  import moment from 'moment'

  export default {
    data: function() {
      return {
        targetDate: '',
      }
    },
    components: {
      Calendar,
      UserAdd,
      datepicker,
    },
    computed: {
      fetchFirstDayOfTargetWeek: function() {
        var targetDate = this.targetDate ? moment(this.targetDate) : moment()
        return targetDate.startOf('isoWeek').format("YYYY-MM-DD");
      }
    },
  }
</script>