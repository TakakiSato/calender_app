<template>
  <td class='user-field'>
    {{ user.name }}
    <div class="delete-list" @click="removeUser">☓ 削除</div>
  </td>
</template>

<script>
  export default {
    props: {
      user: {
        type: Object,
        required: true
      },
      user_index :{
        type: Number,
        required: true
      }
    },
    methods: {
      removeUser: function(){
        if(confirm('本当にこのユーザを削除しますか?')){
          this.$store.dispatch('removeUser', {user_index: this.user_index})
        }
      }
    }
  }
</script>

<style>
.user-field {
  position: relative;
  height: 300px;
}
.delete-list {
  color: #D0D1CD;
  position: absolute;
  right: 5px;
  bottom: 0;

}
</style>

