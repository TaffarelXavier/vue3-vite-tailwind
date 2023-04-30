<template>
  <div class="grid grid-cols-12 gap-4">
    <div class="col-span-8">
      <form @submit.prevent="handleSubmit">
        <!-- CRONÔMETRO -->
        <div class="grid">
          <div class="w-1/9">
            <div class="flex">
              <input
                type="text"
                name="time"
                id="time"
                :value="formatTime"
                class="block w-50 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              <button
                type="button"
                @click="stopTimer"
                v-if="isRunning && clienteSelecionado"
                :disabled="!isRunning"
                class="rounded-none bg-blue-500 hover:bg-blue-600 uppercase px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Reiniciar cronômetro
              </button>
              <button
                @click="iniciarCronometro"
                v-if="clienteSelecionado"
                :disabled="isRunning"
                type="button"
                class="rounded-none bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                INICIAR CRONÔMETRO
              </button>
            </div>
          </div>
        </div>
        <input
          type="hidden"
          name="average_consumption"
          :value="clienteSelecionado?.contact.average_consumption"
        />
        <!-- PRIMEIRA ROW -->
        <div class="grid my-3 grid-cols-3 gap-2">
          <div class="bg-gray-100">
            <silig-select
              label="STATUS"
              required
              :fields-name="['id', 'name']"
              :data="statusesTypes"
              name="status"
            />
          </div>
          <div class="bg-gray-100">
            <silig-date-field name="data" label="DATA" required />
          </div>
          <div class="bg-gray-100">
            <silig-select
              label="VENDEDOR INDICADO"
              required
              :fields-name="['id', 'name']"
              :data="vendedores"
              name="vendedor"
            />
          </div>
        </div>

        <!-- SEGUNDA ROW -->
        <div class="grid my-3 grid-cols-3 gap-2">
          <div class="bg-gray-100">
            <silig-text-field
              readonly
              name="cliente_codigo"
              label="CÓDIGO DO CLIENTE"
              :value="clienteSelecionado?.contact.id"
            />
          </div>
          <div class="bg-gray-100 col-span-2">
            <silig-text-field
              readonly
              name="cliente_nome"
              label="NOME DO CLIENTE"
              :value="clienteSelecionado?.contact.first_name"
            />
          </div>
        </div>

        <!-- TERCEIRA ROW -->
        <div class="grid my-3 grid-cols-3 gap-2">
          <div class="bg-gray-100">
            <silig-select
              label="CIDADE"
              name="cidade"
              required
              :fields-name="['id', 'name']"
              :data="cidades"
              :dataSelected="{ id: clienteSelecionado?.contact.city_id }"
            />
          </div>
          <div class="bg-gray-100 col-span-2">
            <silig-text-field
              name="endereco"
              label="ENDEREÇO"
              :value="clienteSelecionado?.contact.street"
            />
          </div>
        </div>
        <!-- QUARTA ROW: OBSERVAÇÕES -->
        <div class="grid my-3 grid-cols-3 gap-2">
          <div class="bg-gray-100 col-span-2">
            <silig-text-area-field name="observacoes" label="OBSERVAÇÕES" />
          </div>
          <div class="bg-gray-100 py-7" v-if="clienteSelecionado">
            <!-- GRUPO TELEFONE 1 -->
            <div
              class="flex justify-between items-center rounded-lg"
              v-if="clienteSelecionado?.contact.phone1"
            >
              <input
                readonly
                type="text"
                placeholder="Digite aqui"
                :value="clienteSelecionado?.contact.phone1"
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              <div class="flex items-center">
                <a
                  class="rounded-full p-2"
                  :href="`tel:${clienteSelecionado?.contact.phone1}`"
                >
                  <i class="fas fa-phone" style="font-size: 1.3rem"></i>
                </a>
                <button
                  class="rounded-full p-2"
                  type="button"
                  @click="
                    () => {
                      enviarWhatsApp(clienteSelecionado?.contact.phone1);
                    }
                  "
                >
                  <i
                    class="fab fa-whatsapp fa-1x"
                    style="font-size: 1.7rem"
                  ></i>
                </button>
              </div>
            </div>
            <!-- GRUPO TELEFONE 2 -->
            <div
              class="flex justify-between items-center rounded-lg"
              v-if="clienteSelecionado?.contact.phone2"
            >
              <input
                type="text"
                placeholder="Digite aqui"
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              <div class="flex items-center">
                <button class="rounded-full p-2">
                  <i class="fas fa-phone" style="font-size: 1.5rem"></i>
                </button>
                <button class="rounded-full p-2">
                  <i
                    class="fab fa-whatsapp fa-1x"
                    style="font-size: 1.5rem"
                  ></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <!-- QUINTA ROW -->
        <div
          class="mt-6 flex items-center justify-end gap-x-6"
          v-if="clienteSelecionado"
        >
          <div class="relative flex gap-x-3">
            <div class="flex h-6 items-center">
              <input
                id="usar_config_para_todos"
                name="comments"
                type="checkbox"
                checked
                class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
              />
            </div>
            <div class="text-sm leading-6">
              <p class="text-gray-500">
                <label for="usar_config_para_todos"
                  >Usar essas configurações para todos os clientes</label
                >
              </p>
            </div>
          </div>
          <button
            type="reset"
            @click="limparForm"
            class="bg-red-500 text-white text-sm font-bold px-3 py-2 rounded"
          >
            Limpar
          </button>
          <button
            :disabled="isSubmitting"
            type="submit"
            class="rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            {{ isSubmitting ? "SALVNDO..." : "REGISTRAR INFORMAÇÕES" }}
          </button>
        </div>
      </form>
    </div>
    <div class="col-span-4">
      <div
        v-if="!contacts.length"
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
        Não há ligações mais pendentes
      </div>
      <table
        id="myTable"
        v-show="contacts.length > 0"
        class="divide-y divide-gray-200 border w-full"
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
              CLIENTES
            </th>
            <th
              scope="col"
              class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              MÉDIA
            </th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
          <tr
            v-for="contact in contacts"
            :key="contact.contact.id"
            :data-id="contact.contact.id"
            title="Clique para selecionar"
            class="hover:cursor-pointer"
            :class="{
              'bg-blue-500 text-white':
                contact.contact.id == clienteSelecionado?.contact.id,
            }"
          >
            <td
              width="100"
              class="px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-900"
            >
              <span
                :class="{
                  'text-white font-extrabold':
                    contact.contact.id == clienteSelecionado?.contact.id,
                }"
                >{{ contact.contact.first_name }}</span
              >
            </td>
            <td class="text-center">
              {{
                contact.average_consumption &&
                parseInt(contact.average_consumption)
              }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import ListClients from "../components/Telefonar/ListClients.vue";
import SiligSelect from "../components/SiligSelect.vue";
import SiligDateField from "../components/SiligDateField.vue";
import SiligTextField from "../components/SiligTextField.vue";
import SiligTextAreaField from "../components/SiligTextAreaField.vue";
import { enviarMensagem } from "@/services/whatsapp";
import {
  log,
  convertToObject,
  convertToMilliseconds,
  mergeFields,
} from "@/utils";
import config from "@/config";

import {
  fetchClients,
  fetchStatuses,
  fetchVendedores,
  fetchCidades,
  postSiligResults,
} from "@/services/http";

const STATUS_TEM_INTERESSE_ID = 3;
const STATUS_CONTATO_REALIZADO_PELO_WHATSAPP = 6;

export default {
  components: {
    ListClients,
    SiligSelect,
    SiligDateField,
    SiligTextField,
    SiligTextAreaField,
  },
  data() {
    return {
      time: 0,
      startTime: 0,
      currentTime: 0,
      isRunning: false,
      intervalId: null,
      clienteSelecionado: null,
      statusesTypes: [],
      vendedores: [],
      cidades: [],
      contacts: [],
      userId: 2,
      isSubmitting: false,
    };
  },
  created() {
    this.fetchStatuses();
    this.fetchVendedores();
    this.fetchCidades();
    this.fetchClients();
    $("#myTable").DataTable({
      iDisplayLength: 2,
    });
  },
  mounted() {
    const me = this;
    $("#myTable tbody").on("click", "tr", function () {
      if (confirm("Deseja selecionar este cliente?")) {
        const clientId = $(this).data("id");
        const contact = me.contacts.find((c) => c.contact.id === clientId);
        if (contact) {
          me.clienteSelecionado = contact;
          me.iniciarCronometro();
        }
      }
    });
  },
  computed: {
    formatTime() {
      const ms = this.currentTime - this.startTime;
      const hours = Math.floor(ms / 3600000);
      const minutes = Math.floor((ms % 3600000) / 60000);
      const seconds = Math.floor((ms % 60000) / 1000);
      const millis = Math.floor(ms % 1000);
      return `${this.formatNumber(hours)}:${this.formatNumber(
        minutes
      )}:${this.formatNumber(seconds)}:${this.formatNumber(millis, 3)}`;
    },
  },
  methods: {
    async handleSubmit(ev) {
      try {
        const me = this;
        const status_id = ev.target.vendedor.value;
        const vendedor = ev.target.vendedor.value;
        const chronometer = ev.target.time.value;
        const fields = $(ev.target).serializeArray();

        if (status_id == STATUS_TEM_INTERESSE_ID && !vendedor) {
          alert(
            "Quando você escolher a opção 'TEM INTERESSE', você deverá escolher um vendedor indicado."
          );
          return;
        }

        if (status_id == STATUS_CONTATO_REALIZADO_PELO_WHATSAPP) {
          const data = await post("/ligacoes", {
            cliente_id: cliente?.id,
          });
        }

        let contact = Object.assign({}, this.clienteSelecionado);

        this.isSubmitting = true;

        const data = await postSiligResults({
          ...contact,
          ...convertToObject(fields),
          tempo_ligacao: convertToMilliseconds(chronometer) || 0,
          user_id: me.userId,
          client_id: contact.contact.id,
          date: new Date().toISOString().replace("T", " ").split(".").shift(),
        });

        if (data) {
          this.isSubmitting = false;

          const contactsFiltrados = [...this.contacts];

          this.contacts = contactsFiltrados.filter(
            (el) => el.id != this.clienteSelecionado.id
          );

          this.clienteSelecionado = this.pegarPrimeiroElemento();

          if (this.clienteSelecionado || this.contacts.length) {
            me.iniciarCronometro();
          }
          else{
            me.limparForm();
          }
          if (this.contacts.length <= 2) {
            this.fetchClients();
          }
        }
      } catch (error) {
        log(error.toString());
      }
    },
    pegarPrimeiroElemento() {
      return this.contacts[0];
    },
    limparForm() {
      this.stopTimer();
      this.clienteSelecionado = null;
    },
    iniciarCronometro() {
      this.isRunning = true;
      this.startTime = new Date();
      this.currentTime = new Date();
      this.intervalId = setInterval(() => {
        this.currentTime = new Date();
      }, 10);
    },
    formatNumber(value, digits = 2) {
      return value.toString().padStart(digits, "0");
    },
    stopTimer() {
      clearInterval(this.intervalId);
      this.isRunning = false;
      this.startTime = 0;
      this.currentTime = 0;
    },
    enviarWhatsApp(numero) {
      let mensagem = config.siligOptions.find(
        (el) => el.option_name == "mensagem"
      ).option_value;

      config.user.sexo = config.user.sexo == "m" ? "o" : "a";
      let outputText = mergeFields(mensagem, config.user);

      outputText = outputText.replace(/\n\n/g, "%0A%0A");

      outputText = encodeURIComponent(outputText);

      enviarMensagem(numero, outputText);
    },
    async fetchClients() {
      this.contacts = await fetchClients(this.userId);
    },
    async fetchStatuses() {
      const statusesTypes = await fetchStatuses();
      this.statusesTypes = statusesTypes;
    },
    async fetchVendedores() {
      const vendedores = await fetchVendedores();
      this.vendedores = vendedores;
    },
    async fetchCidades() {
      const cidades = await fetchCidades();
      this.cidades = cidades;
    },
  },
};
</script>
<style></style>
