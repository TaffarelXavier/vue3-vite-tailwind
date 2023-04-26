<template>
  <div>
    <nav class="bg-white shadow-lg fixed w-full z-10">
      <div class="max-w-7xl mx-auto px-4">
        <div class="flex justify-between h-16">
          <div class="flex">
            <a href="#" class="flex-shrink-0 flex items-center">
              <!-- Insert your logo here -->
              <svg
                class="w-8 h-8 text-indigo-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 3h3v18H3zM18 3h3v18h-3z"
                ></path>
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 8l-4 4 4 4"
                ></path>
              </svg>
              <span class="text-gray-600 font-semibold ml-2">Logo</span>
            </a>
          </div>
          <div class="flex items-center">
            <div class="flex-shrink-0">
              <router-link v-for="item in links" :key="item.name" :to="item.to"
                ><a
                  class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  {{ item.name }}
                </a></router-link
              >
            </div>
          </div>
          <div class="flex items-center">
            <div class="flex-shrink-0">
              <button
                v-if="!isAuthenticated"
                class="bg-indigo-500 text-white px-2 py-1 rounded-md hover:bg-indigo-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
              >
                Sign in
              </button>
              <button
                v-if="isAuthenticated"
                @click="logout"
                class="bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-red-500"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  // criar um array com as rotas acima
  data() {
    return {
      isAuthenticated: false,
      links: [
        {
          name: "Home",
          to: "/",
        },
        {
          name: "Telefonar",
          to: "/telefonar",
        },
      ],
    };
  },
  async beforeRouteUpdate(to, from) {
    const user = localStorage.getItem("user");
    console.log(user);
  },
  mounted() {
    // Verifica se o token existe no localStorage
    const token = localStorage.getItem("user");
    if (token) {
      this.isAuthenticated = true;
    } else {
      this.isAuthenticated = false;
    }
  },
  methods: {
    logout() {
      localStorage.removeItem("user");
      this.$router.push("/login");
    },
  },
};
</script>

<style scoped>
</style>
