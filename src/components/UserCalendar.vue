<template>
  <tr>
    <user :user="user" :user_id="user_id"/>
    <date-frame v-for="date_index in [0,1,2,3,4,5,6]" :key="date_index" :firstDayOfTargetWeek="firstDayOfTargetWeek" :user="user" :user_id="user_id"/>
  </tr>
</template>

<script>
  import User from './User'
  import DateFrame from './DateFrame'

  export default {
    props: {
      user: {
        type: Object,
        required: true
      },
      firstDayOfTargetWeek: {
        type: String,
        required: true
      },
      user_id :{
        type: String,
        required: true
      }
    },
    components: {
      User,
      DateFrame
    },
  }
</script>