<template>
  <div class="">
    <!-- <input
      type="text"
      id="myInputTextField"
      placeholder="Digite para pesquisar"
      style="width: 100% !important"
      class="block w-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
    /> -->
    <table
      id="myTable"
      style="width: 100% !important"
      class="w-full divide-y divide-gray-200"
    >
      <caption>
        <div
          class="bg-blue-100 border-t-4 border-blue-500 rounded-b px-4 py-3 shadow-md"
        >
          <div class="flex">
            <div class="flex-shrink-0">
              <svg
                class="h-6 w-6 text-blue-500"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2ZM13 17H11V11H13V17ZM13 9H11V7H13V9Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <div class="ml-3">
              <p class="text-sm leading-5 font-medium text-blue-700">
                LIGAÇÕES PENDENTES
              </p>
            </div>
          </div>
        </div>
      </caption>
      <thead class="bg-gray-50">
        <tr>
          <th
            scope="col"
            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            CLIENTE
          </th>
        </tr>
      </thead>
      <tbody class="bg-white divide-y divide-gray-200">
        <tr
          v-for="client in clients"
          :key="client.client.id"
          :data-id="client.client.id"
        >
          <td
            class="px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-900"
          >
            {{ client.client.nome }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  props: {
    clientId: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      clients: [],
      clientSelected: null,
      responseData: null,
      userId: "2",
      table: null,
    };
  },
  created() {
    this.fetchData();
  },
  updated() {
    const me = this;
    if(this.clientId){
      this.clientId = null;
      const newClients = [...me.clients];
      const novosClientes = newClients.filter((c) => c.id != this.clientId);
      this.clients = novosClientes;
    }
    if (me.table) {
      me.table.destroy();
    }
    me.table = $("#myTable").DataTable({
      sDom: '<"search-box"r>lftip',
      lengthChange: false,
      searching: false,
      pageLength: 6,
      language: {
        search: "<label>Procurar:</label>",
      },
      className: "hoverable-row",
    });
  },
  mounted() {
    const me = this;
    $("#myTable tbody").on("click", "tr", function () {
      if (confirm("Deseja ligar para este cliente?")) {
        const clientId = $(this).data("id");
        const client = me.clients.find((c) => c.client.id === clientId);
        if (client) {
          me.clientSelected = client;
          me.$emit("atualizar_cliente_tela", me.clientSelected);
        }
      }
    });
  },
  methods: {
    fetchData() {
      const me = this;
      const options = {
        method: "GET",
        url: "http://127.0.0.1:8000/api/silig/client_users",
        params: { user_id: me.userId },
      };
      axios
        .request(options)
        .then((response) => {
          me.clients = response.data.data;
        })
        .catch((error) => {
          console.error(1, error);
        });
    },
  },
};
</script>

<style scoped>
.hoverable-row:hover {
  background-color: #f5f5f5;
  cursor: pointer;
}
</style>

