<template>
  <div>
    <calendar />
    <user-add />
  </div>
</template>

<script>
  import Calendar from './Calendar'
  import UserAdd from './UserAdd'
  export default {
    components: {
      Calendar,
      UserAdd
    }
  }
</script>