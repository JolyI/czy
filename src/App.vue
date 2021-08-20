<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
html,
body {
  background-color: #f6f6f8;
  &::-webkit-scrollbar {
    display: none !important;
  }
}
#app {
  background-color: #f6f6f8;
}
</style>
