<template>
  <tr>
    <user :user="user" :user_index="user_index"/>
    <date-frame v-for="date_index in [0,1,2,3,4,5,6]" :key="date_index" :date_index="date_index" :firstDayOfTargetWeek="firstDayOfTargetWeek" :user_index="user_index" :user="user" @change="$emit('change')"/>
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
      user_index :{
        type: Number,
        required: true
      }
    },
    components: {
      User,
      DateFrame
    },
  }
</script>