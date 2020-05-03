<template>
  <section class="section content">
    <h1>
      Simple Weekly Calendar
    </h1>
    <div>
      <datepicker v-model="target_date" placeholder="移動したい日付を指定してください" :config="{ dateFormat: 'Y-m-d', static: true }"></datepicker>
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
        target_date: '',
      }
    },
    components: {
      Calendar,
      UserAdd,
      datepicker,
    },
    computed: {
      fetchFirstDayOfTargetWeek: function() {
        var target_date = this.target_date ? moment(this.target_date) : moment()
        return target_date.startOf('isoWeek').format("YYYY-MM-DD");
      }
    },
  }
</script>

<style>
  .flatpickr-wrapper {
  width: 300px;
}
</style>