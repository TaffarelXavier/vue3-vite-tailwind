<template>
  <div>
    <div class="grid grid-cols-12">
      <div class="col-span-12">
        <div
          class="block rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700"
        >
          <form @submit.prevent="handlePesquisarClientes">
            <div class="grid grid-cols-8 gap-4">
              <!--Total na Base-->
              <div class="relative col-span-1">
                <label
                  for="emailHelp123"
                  class="pointer-events-none left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                  >Total na Base
                </label>
                <input
                  type="text"
                  class="peer bg-gray-100 border border-gray-300 py-2 px-4 rounded-md block min-h-[auto] w-full rounded bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                  id="exampleInput123"
                  aria-describedby="emailHelp123"
                  readonly
                  v-model="clientsTotal"
                  autofocus
                />
                <div
                  class="w-full text-sm text-neutral-500 peer-focus:text-primary dark:text-neutral-200 dark:peer-focus:text-primary"
                  data-te-input-helper-ref
                >
                  <span
                    class="inline-block whitespace-nowrap rounded-[0.27rem] bg-warning-100 px-[0.65em] pb-[0.25em] pt-[0.35em] align-baseline text-[0.75em] font-bold leading-none text-warning-800"
                  >
                    Contatos<br>Pendentes: {{ contactsPendentes }}
                  </span>
                </div>
              </div>

              <!--Quantidade-->
              <div class="relative col-span-1">
                <label
                  for="exampleInput124"
                  class="pointer-events-none left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                  >Quantidade
                </label>
                <input
                  v-model="quantidade"
                  required
                  type="number"
                  class="peer bg-gray-100 border border-gray-300 py-2 px-4 rounded-md block min-h-[auto] w-full rounded bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                  id="exampleInput124"
                  aria-describedby="emailHelp124"
                  placeholder="Last name"
                />
                <span
                  class="inline-block whitespace-nowrap rounded-[0.27rem] bg-info-100 px-[0.65em] pb-[0.25em] pt-[0.35em] align-baseline text-[0.75em] font-bold leading-none text-info-800"
                  >Quantidade máxima<br>permitidapor vez: 500
                </span>
              </div>

              <!--Localidade-->
              <div
                class="relative col-span-3"
                data-te-input-wrapper-init
              >
                <label
                  for="exampleInput125"
                  class="pointer-events-none left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-neutral-200"
                  >Localidade
                </label>
                <select
                  class="peer bg-gray-100 border border-gray-300 py-2 px-4 rounded-md block min-h-[auto] w-full rounded bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                  data-te-select-init
                  data-te-select-filter="true"
                  v-model="cidade"
                  required
                  id="mySelect"
                >
                  <option value="" disabled selected>Selecione a cidade</option>
                  <option
                    class="p-2"
                    v-for="cidade in cidades"
                    :value="cidade.id"
                    :key="cidade.id"
                    :data-te-select-secondary-text="
                      'Total de contatos sem ligação: ' + cidade.total_clientes
                    "
                  >
                    {{ cidade.name }}
                  </option>
                </select>
              </div>

              <!--Bairro-->
              <div class="relative col-span-3" data-te-input-wrapper-init>
                <label
                  for="exampleInput126"
                  class="pointer-events-none left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-neutral-200"
                  >Bairro
                </label>
                <input
                  type="number"
                  class="peer bg-gray-100 border border-gray-300 py-2 px-4 rounded-md block min-h-[auto] w-full rounded bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                  id="exampleInput126"
                  placeholder="Password"
                />
              </div>

              <!--Endereço-->
              <div class="relative mb-4 col-span-8" data-te-input-wrapper-init>
                <label
                  for="exampleInput126"
                  class="pointer-events-none left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-neutral-200"
                  >Endereço
                </label>
                <input
                  type="number"
                  class="peer bg-gray-100 border border-gray-300 py-2 px-4 rounded-md block min-h-[auto] w-full rounded bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                  id="exampleInput126"
                  placeholder="Password"
                />
              </div>
            </div>

            <!--Submit button-->
            <button
              type="submit"
              class="inline-block w-full rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
              data-te-ripple-init
              data-te-ripple-color="light"
              :disabled="isPesquisandoClientes"
            >
              {{
                !isPesquisandoClientes ? "PESQUISAR CLIENTES" : "PESQUISANDO..."
              }}
            </button>
          </form>
        </div>
      </div>
      <div class="col-span-12">
        <div class="flex flex-col">
          <div class="overflow-x-auto sm:-mx-6 lg:-mx-8 h-50">
            <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
              <div class="overflow-hidden">
                <table
                  v-if="clientesPesquisados.length > 0"
                  class="min-w-full text-center text-sm font-light"
                >
                  <thead class="border-b font-medium dark:border-neutral-500">
                    <tr>
                      <th width="300" scope="col" class="py-2 text-left">#</th>
                      <th scope="col" class="py-2 text-left">
                        Nome do Cliente
                      </th>
                      <th scope="col" class="py-2 text-left">Logradouro</th>
                      <th scope="col" class="py-2 text-left">Consumo</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="(cliente, index) in clientesPesquisados"
                      :key="cliente.id"
                      class="border-b dark:border-neutral-500"
                    >
                      <td
                        width="300"
                        class="whitespace-nowrap text-left py-2 pl-3 w-1/4"
                      >
                        <div
                          class="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]"
                        >
                          <span
                            :class="{ 'line-through': !cliente.selecionado }"
                            >{{ index + 1 }}</span
                          >
                          -
                          <input
                            class="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                            type="checkbox"
                            @change="selecionarCliente(cliente, $event)"
                            :checked="cliente.selecionado"
                            :id="cliente.id"
                          />
                          <label
                            :for="cliente.id"
                            :class="{ 'line-through': !cliente.selecionado }"
                            >{{ cliente.first_name }}</label
                          >
                        </div>
                      </td>
                      <td
                        class="whitespace-nowrap text-left py-2"
                        :class="{ 'line-through': !cliente.selecionado }"
                      >
                        {{ cliente.first_name }}
                      </td>
                      <td
                        class="whitespace-nowrap text-left py-2"
                        :class="{ 'line-through': !cliente.selecionado }"
                      >
                        {{ cliente.street }}
                      </td>
                      <td
                        class="whitespace-nowrap text-left py-2"
                        :class="{ 'line-through': !cliente.selecionado }"
                      >
                        {{ cliente.media }}
                      </td>
                    </tr>
                  </tbody>
                </table>

                <div
                  v-if="!clientesPesquisados.length"
                  class="mb-3 inline-flex w-full items-center rounded-lg bg-primary-100 px-6 py-5 text-base text-primary-700"
                  role="alert"
                >
                  <span class="mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      class="h-5 w-5"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </span>
                  Para pesquisar clientes, clique no botão "Pesquisar Clientes" acima.
                </div>

                <button
                  :disabled="isSalvando || !totalClientesSalvos"
                  @click="salvarDados"
                  v-if="clientesPesquisados.length > 0"
                  :class="{
                    'disabled:opacity-50': !totalClientesSalvos,
                    'bg-primary-100': !totalClientesSalvos,
                    'cursor-not-allowed': !totalClientesSalvos,
                  }"
                  class="inline-block w-full rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                >
                  {{ isSalvando ? "Salvando..." : "Salvar" }}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { Select, initTE } from "tw-elements";
import { useRoute } from "vue-router";
import axios from "../services/api.js";

const route = useRoute();

onMounted(() => {
  const selectEl = document.getElementById("mySelect");
  const select = new Select(selectEl, {
    selectSearchPlaceholder: "Selecione...",
  });
  select.open();
  selectEl.addEventListener("optionSelect.te.select", (e) => {
    console.log("aaa");
  });
});

const user_id = ref(route.params.id);
const cidades = ref([]);
const quantidade = ref("10");
const cidade = ref("");
const bairro = ref("");
const endereco = ref("");
const clientsTotal = ref("");
const contactsPendentes = ref("");
const clientesPesquisados = ref([]);
const isPesquisandoClientes = ref(false);
const isSalvando = ref(false);
const totalClientesSalvos = ref(0);

async function fetchCidades() {
  const response = await axios.get("/cities");
  const { data } = await response.data;
  cidades.value = data;
  return data;
}

function selecionarCliente(cliente, ev) {

  clientesPesquisados.value.map((item) => {
    if (item.id === cliente.id) {
      item.selecionado = ev.target.checked;
    }
    return item;
  });

  const clientesSelecionados = [...clientesPesquisados.value]
    .filter((item) => item.selecionado)
    .map((item) => item.id);

  totalClientesSalvos.value = clientesSelecionados.length;
}

async function fetchTotalClientes() {
  const response = await axios.get("/clients-total");
  const { data } = await response.data;
  clientsTotal.value = data.clientsTotal;
  contactsPendentes.value = data.clientsPendentes;
  return data;
}

async function handlePesquisarClientes() {
  const formData = {
    quantidade: +quantidade.value,
    city_id: +cidade.value,
    user_id: user_id.value,
    logradouro: endereco.value,
    bairro: bairro.value,
    ano: new Date().getFullYear() - 1,
  };

  isPesquisandoClientes.value = true;

  const response = await axios.post("/listarClients", formData);

  const { data } = await response.data;

  data.map((item) => {
    item.selecionado = true;
    return item;
  });

  clientesPesquisados.value = data;
  totalClientesSalvos.value = data.length;
  isPesquisandoClientes.value = false;
}

async function salvarDados() {
  const clientesSelecionados = [...clientesPesquisados.value]
    .filter((item) => item.selecionado)
    .map((item) => item.id);

  totalClientesSalvos.value = clientesSelecionados.length;

  const formData = {
    quantidade: quantidade.value,
    clientes: clientesSelecionados,
    user_id: user_id.value,
  };

  isSalvando.value = true;
  const response = await axios.post("/client_users", formData);
  isSalvando.value = false;
  clientesPesquisados.value = [];
}

fetchTotalClientes();
fetchCidades();
</script>

<style>
</style>
