<template>
  <table class="table is-bordered">
    <calendar-header  :firstDayOfTargetWeek="firstDayOfTargetWeek"/>
    <user-calendar v-for="(user, user_index) in users" :key="user_index" :user_index="user_index" :user="user" :firstDayOfTargetWeek="firstDayOfTargetWeek" @change="saveNowTaskState"/>
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
    },
    methods: {
      saveNowTaskState: function() {
        this.$store.dispatch('saveNowTaskState', {users: this.users})
      }
    }
  }
</script>