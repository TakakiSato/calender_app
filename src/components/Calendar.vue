<template>
  <table class="table is-bordered">
    <calendar-header  :firstDayOfTargetWeek="firstDayOfTargetWeek"/>
    <user-calendar v-for="(user, user_id) in users" :key="user_id" :user_id="user_id" :user="user" :firstDayOfTargetWeek="firstDayOfTargetWeek"/>
</table>
</template>

<script>
  import CalendarHeader from './CalendarHeader'
  import UserCalendar from './UserCalendar'
  import {mapState} from 'vuex'

  export default {
    props: {
      firstDayOfTargetWeek: {
        type: String,
        required: true
      },
    },
    computed: {
      ...mapState([
        'users'
        ]),
    },
    components: {
      CalendarHeader,
      UserCalendar
    }
  }
</script>