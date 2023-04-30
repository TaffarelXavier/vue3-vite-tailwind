<template>
  <div>
    <!--Tabs navigation-->
    <ul
      class="mb-5 flex list-none flex-row flex-wrap border-b-0 pl-0"
      role="tablist"
      data-te-nav-ref
    >
      <li role="presentation">
        <a
          href="#tabs-home"
          class="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400"
          data-te-toggle="pill"
          data-te-target="#tabs-home"
          data-te-nav-active
          role="tab"
          aria-controls="tabs-home"
          aria-selected="true"
          >CONTATOS REALIZADOS</a
        >
      </li>
      <li role="presentation">
        <a
          href="#tabs-profile"
          class="focus:border-transparen my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400"
          data-te-toggle="pill"
          data-te-target="#tabs-profile"
          role="tab"
          aria-controls="tabs-profile"
          aria-selected="false"
          >CONTATOS PENDENTES</a
        >
      </li>
    </ul>

    <!--Tabs content-->
    <div class="mb-6">
      <div
        class="hidden opacity-100 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
        id="tabs-home"
        role="tabpanel"
        aria-labelledby="tabs-home-tab"
        data-te-tab-active
      >
        <div
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
          Não há ligações realizadas para este usuário.
        </div>
        <div
          class="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5"
        >
          <table
            v-if="contatos.CONTATOS_REALIZADOS"
            class="w-full border-collapse bg-white text-left text-sm text-gray-500"
          >
            <!-- AÇÕES EM MASSA -->
            <caption>
              <div class="flex">
                <select data-te-select-init v-model="acao">
                  <option value="" disabled selected>Ações em massa</option>
                  <option value="delete">Excluir</option>
                </select>
                <button
                  type="button"
                  @click="aplicarAcao('CONTATOS_REALIZADOS')"
                  class="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                >
                  Aplicar
                </button>
              </div>
            </caption>
            <thead class="bg-gray-50">
              <tr>
                <th scope="col" class="px-6 py-4 font-medium text-gray-900">
                  <div class="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                    <input
                      class="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                      type="checkbox"
                      value=""
                      @change="selecionarTudo('CONTATOS_REALIZADOS')"
                    />
                    Nome
                  </div>
                </th>
                <th scope="col" class="px-6 py-4 font-medium text-gray-900">
                  Celular
                </th>
                <th scope="col" class="px-6 py-4 font-medium text-gray-900">
                  Rua
                </th>
                <th scope="col" class="px-6 py-4 font-medium text-gray-900">
                  Consumo Médio
                </th>
                <th
                  scope="col"
                  class="px-6 py-4 font-medium text-gray-900"
                ></th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-100 border-t border-gray-100">
              <tr
                class="hover:bg-gray-50"
                v-for="contato in contatos.CONTATOS_REALIZADOS"
                :key="contato.id"
              >
                <td class="px-6 py-4">
                  <div class="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                    <input
                      class="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                      type="checkbox"
                      value=""
                      :checked="contato.selected"
                      :id="'checkboxDefault' + contato.id"
                      @change="
                        selecionarContatos('CONTATOS_REALIZADOS', contato.id)
                      "
                    />
                    <label
                      :for="'checkboxDefault' + contato.id"
                      class="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600"
                    >
                      REALIZADO
                    </label>
                    {{ contato.contact.first_name }}
                  </div>
                </td>
                <td class="px-6 py-4">
                  {{ contato.contact.phone1 }}
                </td>
                <td class="px-6 py-4">
                  {{ contato.contact.street }}
                </td>
                <td class="px-6 py-4">
                  {{ contato.contact.consumoTotal }}
                </td>
                <td class="px-6 py-4">
                  <div class="flex justify-end gap-4">
                    <!-- <a @click="excluirLigacao(contato.id)">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="h-6 w-6"
                        x-tooltip="tooltip"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                        />
                      </svg>
                    </a> -->
                    <a x-data="{ tooltip: 'Edite' }" href="#">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="h-6 w-6"
                        x-tooltip="tooltip"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                        />
                      </svg>
                    </a>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <div v-if="contatos.CONTATOS_REALIZADOS" class="alert alert-info">
            Não há nenhuma ligação feita
          </div>
        </div>
      </div>
      <div
        class="hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
        id="tabs-profile"
        role="tabpanel"
        aria-labelledby="tabs-profile-tab"
      >
        <div
          class="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5"
        >
          <table
            class="w-full border-collapse bg-white text-left text-sm text-gray-500"
          >
            <!-- AÇÕES EM MASSA -->
            <caption>
              <div class="flex">
                <select data-te-select-init v-model="acao">
                  <option value="" disabled selected>Ações em massa</option>
                  <option value="delete">Excluir</option>
                </select>
                <button
                  type="button"
                  @click="aplicarAcao('CONTATOS_PENDENTES')"
                  class="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                >
                  Aplicar
                </button>
              </div>
            </caption>
            <thead class="bg-gray-50">
              <tr>
                <th scope="col" class="px-6 py-4 font-medium text-gray-900">
                  Nome
                </th>
                <th scope="col" class="px-6 py-4 font-medium text-gray-900">
                  Celular
                </th>
                <th scope="col" class="px-6 py-4 font-medium text-gray-900">
                  Rua
                </th>
                <th scope="col" class="px-6 py-4 font-medium text-gray-900">
                  Consumo
                </th>
                <th
                  scope="col"
                  class="px-6 py-4 font-medium text-gray-900"
                ></th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-100 border-t border-gray-100">
              <tr
                class="hover:bg-gray-50"
                v-for="contato in contatos.CONTATOS_PENDENTES"
                :key="contato.id"
              >
                <td class="px-6 py-4">
                  <div class="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                    <input
                      class="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                      type="checkbox"
                      value=""
                      :id="'checkboxDefault' + contato.id"
                      @change="
                        selecionarContatos('CONTATOS_PENDENTES', contato.id)
                      "
                    />
                    <label
                      :for="'checkboxDefault' + contato.id"
                      class="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-red-600"
                    >
                      PENDENTE
                    </label>
                    {{ contato.client.nome }}
                  </div>
                </td>
                <td class="px-6 py-4">
                  {{ contato.client.telefone1 }}
                </td>
                <td class="px-6 py-4">
                  {{ contato.client.logradouro }}
                </td>
                <td class="px-6 py-4">
                  {{ contato.client.consumoTotal }}
                </td>
                <td class="px-6 py-4">
                  <div class="flex justify-end gap-4">
                    <!-- <a @click="excluirLigacao(contato.id)">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="h-6 w-6"
                        x-tooltip="tooltip"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                        />
                      </svg>
                    </a> -->
                    <a x-data="{ tooltip: 'Edite' }" href="#">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="h-6 w-6"
                        x-tooltip="tooltip"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                        />
                      </svg>
                    </a>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { Tab, Select, initTE } from "tw-elements";
import axios from "../services/api.js";
import { map } from "lodash-es";

const route = useRoute();

onMounted(() => {
  initTE({ Tab, Select });
});

const contatos = ref([]);
const acao = ref("");

async function excluirLigacao(id) {
  if (confirm("Deseja excluir o contato?")) {
  }
}

// Definir o usuário aqui:

const userId = route.params.id;

async function fetchLigacoes(userId) {
  const response = await axios.get(`/users/${userId}/clientes`);
  const { data } = await response.data;
  contatos.value = data;
  return data;
}

async function excluirContatos(lugar, userId, contatosSelecionados) {
  if (!contatosSelecionados.length) {
    alert("Selecione algum contato");
    return;
  }

  const data = { contatosIds: contatosSelecionados, tipo: "delete" };

  const response = await axios({
    method: "delete",
    url: `/client_users/${userId}/bulk`,
    data,
  });

  const contadosIds = map(contatosSelecionados, "id");

  const contatosFiltrados = contatos.value[lugar].filter(
    (contato) => !contadosIds.includes(contato.id)
  );

  contatos.value[lugar] = contatosFiltrados;
}

function aplicarAcao(lugar) {
  if (!acao.value) {
    alert("Selecione uma ação");
    return;
  }
  if (acao.value === "delete") {
    const contatosSelecionados = [
      ...contatos.value[lugar].filter((item) => item.selected),
    ].map((item) => {
      return { id: item.id, client_id: item.client.id };
    });
    excluirContatos(lugar, userId, contatosSelecionados);
  }
}

function selecionarContatos(lugar, id) {
  const contatosSelecionados = [
    ...contatos.value[lugar].map((item) => {
      item.selected = item.id == id ? !item.selected : item.selected;
      return item;
    }),
  ];
}

// selecionarTudo
function selecionarTudo(lugar) {
  const contatosSelecionados = [
    ...contatos.value[lugar].map((item) => {
      item.selected = !item.selected;
      return item;
    }),
  ];
  contatos.value[lugar] = contatosSelecionados;
}

fetchLigacoes(userId);
</script>

<style>
</style>
