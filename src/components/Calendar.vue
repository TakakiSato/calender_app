<template>
  <table class="table is-bordered">
    <calendar-header  :firstDayOfTargetWeek="firstDayOfTargetWeek"/>
    <user-calendar v-for="(user, index) in users" :key="user.id" :user="user" :index="index" :firstDayOfTargetWeek="firstDayOfTargetWeek"/>
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