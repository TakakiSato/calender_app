<template>
    <td>{{ user }}
      <div class="deleteList" @click="removeUser">☓</div>
    </td>
</template>

<script>
  export default {
    props: {
      user: {
        type: Object,
        required: true
      },
      user_id: {
        type: String,
        required: true
      }
    },
    methods: {
      removeUser: function(){
        if(confirm('本当にこのユーザを削除しますか?')){
          this.$store.dispatch('removeUser', {user_id: this.user_id})
        }
      }
    }
  }
</script>

<style>
  .deleteList{
    color: silver;
  }
</style>