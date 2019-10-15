<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
html,
body {
  font-family: "Rubik", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333333;
  margin: 0;
  padding: 0;
  background: #faf9f4;
  font-size: 13px;
}

.row {
  margin: 0;
}
</style>
