<template>
  <div>
    <div class="bg-gray-100">
      <header class="bg-white shadow">
        <Navbar />
      </header>
      <br />
      <br />
      <br />
      <main class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <router-view v-slot="{ Component }">
          <transition name="bounce" mode="out-in">
            <component :is="Component" key="$route.path" />
          </transition>
        </router-view>
      </main>
      <!-- <Footer /> -->
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";

export default {
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style scoped>
/* .bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0.8);
  }
  50% {
    transform: scale(1.01);
  }
  100% {
    transform: scale(1);
  }
} */
</style>
