<template>
  <borad />
</template>

<script>
  import Borad from './components/Board'
  export default {
    components: {
      Borad
    }
  }
</script>

<style lang="scss">
// Import a Google Font
@import url('https://fonts.googleapis.com/css?family=Nunito:400,700');

// Set your brand colors
$purple: #8A4D76;
$pink: #FA7C91;
$brown: #757763;
$beige-light: #D0D1CD;
$beige-lighter: #EFF0EB;

// Update Bulma's global variables
$family-sans-serif: "Nunito", sans-serif;
$grey-dark: $brown;
$grey-light: $beige-light;
$primary: $purple;
$link: $pink;
$widescreen-enabled: false;
$fullhd-enabled: false;

// Update some of Bulma's component variables
$body-background-color: $beige-lighter;
$control-border-width: 2px;
$input-border-color: transparent;
$input-shadow: none;


@import "../node_modules/bulma/bulma.sass";
</style>

<style type="text/css">
table {
  width: 100%;
}

table {
  border: 1px solid #aaa;
  border-collapse: separate;
  border-spacing: 0;
  border-radius: 6px;
}
table thead th,
table tbody th,
table tbody td {
  padding: .6em 3em;
  border-bottom: 1px solid #aaa;
}
table thead th {
  background-color: #ddd;
}
table tbody th {
  background-color: #eee;
}
table thead th + th,
table tbody td {
  border-left: 1px solid #aaa;
}
table tbody tr:last-child th,
table tbody tr:last-child td {
  border-bottom: none;
}
table thead tr:first-child th:first-child {
  border-radius: 8px 0 0 0;
}
table thead tr:first-child th:last-child {
  border-radius: 0 8px 0 0;
}
table tbody tr:last-child th:first-child {
  border-radius: 0 0 0 8px;
}
table tbody tr:last-child th:last-child {
  border-radius: 0 0 8px 0;
}



</style>