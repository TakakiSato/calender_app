<template>
  <!-- 日付ヘッダー MasterCalender -->
  <tr>
    <th class='user_col'>ユーザ名</th>
    <th class='date_col' v-for="index in [0,1,2,3,4,5,6]" :key="index">
      {{calcEveryDay(index)}}
    </th>
  </tr>
</template>

<script>
  import moment from 'moment'

  export default {
    props: {
      firstDayOfTargetWeek: {
        type: String,
        required: true
      },
    },
    methods: {
      calcEveryDay: function(index) {
        return moment(this.firstDayOfTargetWeek).add(index, 'd').format('YYYY-MM-DD')
      }
    }
  }
</script>

<style>
.user_col {
  width:9%
}
.date_col {
  width:13%
}
</style>
