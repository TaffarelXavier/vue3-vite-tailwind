<template>
  <div>
    <div v-if="user">
      <h2>{{ user.name }}</h2>
      <p>Username: {{ user.username }}</p>
      <p>Email: {{ user.email }}</p>
      <p>Phone: {{ user.phone }}</p>
      <p>Website: {{ user.website }}</p>
      <h3>Address:</h3>
      <p>Street: {{ user.address.street }}</p>
      <p>Suite: {{ user.address.suite }}</p>
      <p>City: {{ user.address.city }}</p>
      <p>Zipcode: {{ user.address.zipcode }}</p>
      <h3>Company:</h3>
      <p>Name: {{ user.company.name }}</p>
      <p>Catch Phrase: {{ user.company.catchPhrase }}</p>
      <p>BS: {{ user.company.bs }}</p>
    </div>
    <div v-if="users && !isLogged">
      <h1>Usuários</h1>
      <ul>
        <li v-for="user in users" :key="user.id">
          <router-link :to="'/users/' + user.id">{{ user.name }}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { debounce } from "lodash-es";
// A função fetchUser retorna uma promise que resolve com os dados do usuário
function fetchUser(id) {
  return fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then(
    (response) => response.json()
  );
}

function fetchAllUsers() {
  return fetch(`https://jsonplaceholder.typicode.com/users`).then((response) =>
    response.json()
  );
}

export default {
  data() {
    return {
      title: "Home",
      user: null,
      users: [],
      isLogged: true,
      isAuthenticated: false,
    };
  },
  created() {
    this.$watch(
      () => this.$route.params,
      (toParams, previousParams) => {
        console.log("Testesss");
      }
    );
  },
  // beforeRouteLeave(to, from) {
  //   const answer = window.confirm(
  //     "Do you really want to leave? you have unsaved changes!"
  //   );
  //   if (!answer) return false;
  // },
  async beforeRouteUpdate(to, from) {
    const userId = to.params.id;
    if (userId) {
      this.user = await fetchUser(userId);
    } else {
      this.user = null;
      this.users = await fetchAllUsers();
    }
  },
  async mounted() {
    if (this.isLogged) {
      this.$router.replace("/users/6");
      this.user = await fetchUser(6);
    }

    if (!this.user) {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((users) => {
          this.users = users;
        });
    }
  },
  methods: {
    async carregarDados() {
      this.dados = await api.buscarDados();
    },
  },
};
</script>
