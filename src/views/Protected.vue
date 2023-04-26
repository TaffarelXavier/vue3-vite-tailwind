<template>
  <div>
    <h1>Grettings, {{ username }}</h1>
    <button @click="logout">Logout</button>
  </div>
</template>

<script>
export default {
  name: "Protected",
  data() {
    return {
      title: "Home",
      user: null,
      users: [],
      isLogged: true,
      isAuthenticated: false,
      username: window.user,
    };
  },
  methods: {
    logout() {
      window.user = null;
      this.$router.push("/");
    },
  },
};
</script>

<style>
</style>
