<template>
  <div>
    <h1>Invoices</h1>
    <p>Here you can see all your invoices</p>
  </div>
</template>

<script>
import { useRoute, useRouter, onBeforeRouteLeave } from "vue-router";

export default {
  setup() {
    onBeforeRouteLeave((to, from) => {
      const answer = window.confirm(
        "Are you sure you want to leave? Invoices are super awesome!"
      );
      if (!answer) return false;
    });
    return {};
  },
};
</script>

<style>
</style>
