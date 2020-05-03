<template>
    <td>{{ user.name }}
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
      index: {
        type: Number,
        required: true
      }
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

<style>
  .deleteList{
    color: silver;
  }

</style>