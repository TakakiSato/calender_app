<template>
    <div class=task-card>
      {{task['task']}}
    </div>

</template>

<script>
  export default {
    props: {
      task: {
        type: Object,
        required: true
      },
    },
  }
</script>

<style>
.task-card {
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 10px 10px 10px;
  background-color: #fff;
  border-radius: 8px;
  width: 100%;
  cursor: pointer;
  box-shadow:5px 5px 13px 0px #898989;
}
</style>