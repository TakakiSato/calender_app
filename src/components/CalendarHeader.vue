<template>
  <!-- 日付ヘッダー MasterCalender -->
  <tr>
    <th>ユーザ名</th>
    <th v-for="index in [0,1,2,3,4,5,6]" :key="index">
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
        return moment(this.firstDayOfTargetWeek).add(index, 'd').format('YYYY-MM-DD')  // '2021-01-10T07:30:20+09:00'
      }
    }
  }
</script>