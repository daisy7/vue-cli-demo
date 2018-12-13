<template>
  <div>
    <router-link to="/">Home</router-link>|
    <router-link to="/about">About</router-link>|
    <router-link to="/table">Table</router-link>|
    <router-link to="/login">Login</router-link>|
    <router-link to="/register">Register</router-link>|
    <router-view/>
  </div>
</template>
<script>
export default {
  data() {
    return {
      search: ""
    };
  }
};
</script>
<style lang="scss" scoped>
</style>