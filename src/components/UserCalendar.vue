<template>
  <tr>
    <user :user="user" :index="index"/>
    <date-frame v-for="index in [0,1,2,3,4,5,6]" :key="index" :index="index" :firstDayOfTargetWeek="firstDayOfTargetWeek" />

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
      index: {
        type: Number,
        required: true
      },
      firstDayOfTargetWeek: {
        type: String,
        required: true
      },
    },
    components: {
      User,
      DateFrame
    },
    methods: {
      removeUser: function(){
        if(confirm('本当にこのユーザを削除しますか?')){
          this.$store.dispatch('removeUser', {index: this.index})
        }
      }
    }
  }
</script>