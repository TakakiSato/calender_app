<template>
  <section class="section container content">
    <h1>
      My Calendar
    </h1>

    <table class="table is-bordered">
      <!-- 日付ヘッダー MasterCalender -->
      <tr>
        <th
        v-for="dayName in [0, 1, 2, 3, 4, 5]"
        :key="dayName"
        class="week"
        >
        Dec 1
      </th>
    </tr>
    <!-- 日付ヘッダー MasterCalender -->

    <!-- UserCalender -->
    <tr v-for="index in [0, 1, 2]" :key="index">
      <!-- User -->
      <!-- User -->

      <!-- TaskList-->
      <td
      v-for="day in [0, 1, 2, 3, 4, 5]"
      :key="day.date"
      class="week"
      >
      <p class="tag is-primary is-light is-medium">
        2020-04-02
      </p>
      <!-- TaskList-->
    </td>
  </tr>
  <!-- UserCalender -->
</table>
</section>
</template>

<script>

</script>