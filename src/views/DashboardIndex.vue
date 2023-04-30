<template>
  <div class="space-y-12">
    <form>
      <div class="relative border-b border-gray-900/10">
        <h2 class="text-base font-semibold leading-7 text-gray-900">
          Dashboard
        </h2>
        <!-- Filtros -->
        <div class="absolute top-0 right-0 mt-2 mr-2" v-if="!isPainelVisivel">
          <button
            type="button"
            @click="esconderPainelFiltro"
            class="text-gray-400 hover:text-gray-600"
          >
            <i class="fas fa-eye"></i>
          </button>
        </div>

        <!-- PAINEL -->
        <div class="rounded-lg grid grid-cols-12" v-if="isPainelVisivel">
          <div class="relative col-span-12 bg-white">
            <div class="absolute top-0 right-0 mt-2 mr-2">
              <button
                type="button"
                @click="esconderPainelFiltro"
                class="text-gray-400 hover:text-gray-600"
              >
                <i class="fas fa-eye-slash"></i>
              </button>
            </div>
            <div class="inset-0 z-50 flex justify-center items-center w-full">
              <div class="inset-0 bg-black opacity-50"></div>
              <div class="relative">
                <div class="p-4">
                  <div class="flex items-center justify-center">
                    <div class="relative mr-4">
                      <input
                        type="radio"
                        id="hoje"
                        name="filtro-data"
                        class="sr-only form-radio"
                        :checked="isHoje"
                        v-model="isHoje"
                      />
                      <label
                        for="hoje"
                        class="bg-gray-300 hover:bg-gray-400 cursor-pointer px-3 py-2 rounded-md form-radio-label"
                      >
                        Hoje
                      </label>
                    </div>
                    <div class="relative mr-4">
                      <input
                        type="radio"
                        id="ontem"
                        name="filtro-data"
                        class="sr-only"
                        :checked="isOntem"
                        v-model="isOntem"
                      />
                      <label
                        for="ontem"
                        class="bg-gray-300 hover:bg-gray-400 cursor-pointer px-3 py-2 rounded-md"
                      >
                        Ontem
                      </label>
                    </div>
                    <div class="relative mr-4">
                      <input
                        type="radio"
                        id="semana"
                        name="filtro-data"
                        class="sr-only"
                        :checked="isEstaSemana"
                        v-model="isEstaSemana"
                      />
                      <label
                        for="semana"
                        class="bg-gray-300 hover:bg-gray-400 cursor-pointer px-3 py-2 rounded-md"
                      >
                        Nesta Semana
                      </label>
                    </div>
                    <div class="relative mr-4">
                      <input
                        type="radio"
                        id="mes"
                        name="filtro-data"
                        class="sr-only"
                        :checked="isEsteMes"
                        v-model="isEsteMes"
                      />
                      <label
                        for="mes"
                        class="bg-gray-300 hover:bg-gray-400 cursor-pointer px-3 py-2 rounded-md"
                      >
                        Neste Mês
                      </label>
                    </div>
                    <div class="relative mr-4">
                      <select
                        v-model="mesSelecionado"
                        class="bg-gray-300 hover:bg-gray-400 cursor-pointer px-2 py-1 rounded-md focus:outline-none focus:shadow-outline"
                      >
                        <option value="" disabled selected>
                          Selecione o mês
                        </option>
                        <option value="1">Janeiro</option>
                        <option value="2">Fevereiro</option>
                        <option value="3">Março</option>
                        <option value="4">Abril</option>
                        <option value="5">Maio</option>
                        <option value="6">Junho</option>
                        <option value="7">Julho</option>
                        <option value="8">Agosto</option>
                        <option value="9">Setembro</option>
                        <option value="10">Outubro</option>
                        <option value="11">Novembro</option>
                        <option value="12">Dezembro</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- CANVAS  -->
        <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div class="sm:col-span-12">
            <canvas id="myChart" style="width: 100%; height: 200px"></canvas>
          </div>
        </div>
        <!-- ROW 3: CARDS -->
        <div class="flex gap-4 my-4">
          <div class="w-4/12">
            <div class="space-y-4">
              <div
                style="background: rgba(209, 20, 0)"
                class="pointer-events-auto w-full text-white rounded-lg p-4 leading-5 shadow-xl shadow-black/5 hover:bg-slate-50 ring-1 ring-slate-700/10"
              >
                <div class="flex justify-between">
                  <h3>PENDENTES</h3>
                </div>
                <!-- <div class="mt-1 text-white">Last message sent an hour ago</div> -->
                <div class="mt-6 font-medium text-white">
                  {{ ligacoesPendentes }}
                </div>
              </div>
            </div>
          </div>
          <div class="w-4/12">
            <div
              style="background: rgb(0, 154, 81)"
              class="pointer-events-auto w-full text-white rounded-lg bg-white p-4 leading-5 shadow-xl shadow-black/5 hover:bg-slate-50 ring-1 ring-slate-700/10"
            >
              <div class="flex justify-between">
                <h2>LIGAÇÕES CONCLUÍDAS</h2>
              </div>
              <!-- <div class="mt-1 text-white">Last message sent an hour ago</div> -->
              <div class="mt-6 font-medium text-white">
                {{ ligacoesConcluidas }}
              </div>
            </div>
          </div>
          <div class="w-4/12">
            <div
              style="background: rgb(64, 64, 64)"
              class="pointer-events-auto w-full text-white rounded-lg p-4 leading-5 shadow-xl shadow-black/5 hover:bg-slate-50 ring-1 ring-slate-700/10"
            >
              <div class="flex justify-between">
                <h2>MÉDIA DE LIGAÇÕES POR DIA</h2>
              </div>
              <!-- <div class="mt-1 text-white">Last message sent an hour ago</div> -->
              <div class="mt-6 text-white font-medium">
                <h2>{{ mediaMensalLigacoes }}</h2>
              </div>
            </div>
          </div>
        </div>
        <!-- ROW 4 -->
        <div class="flex gap-4">
          <div class="w-8/12">
            <div class="table-responsive">
              <div
                style="
                  background: rgb(1, 12, 58);
                  border-radius: 8px;
                  padding: 5px;
                  color: rgb(255, 255, 255);
                  display: flex;
                  flex-direction: row;
                "
              >
                <div
                  style="width: 10%;
                    writing-mode: vertical-lr;
                    transform: rotate(180deg);
                    text-align: center;
                    display: flex;
                    place-content: center;
                    align-items: center;"
                >
                  <strong>Por Status</strong>
                </div>
                <div
                  style="
                    width: 100%;
                    background: rgb(255, 255, 255);
                    border-radius: 10px;
                    padding: 10px;
                  "
                >
                  <table
                    style="
                      width: 100%;
                      border-collapse: collapse;
                      border-radius: 7px;
                    "
                    class="font-medium"
                  >
                    <thead>
                      <tr
                        style="background: rgb(1, 12, 58); border-radius: 7px"
                      >
                        <th style="flex: 1 1 0%">NOME DO STATUS</th>
                        <th style="flex: 1 1 0%">QUANTIDADE</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        style="
                          border-radius: 7px;
                          color: rgb(0, 0, 0);
                          padding-top: 5px;
                          padding-bottom: 5px;
                        "
                        v-for="status in ligacaoPorStatus"
                        :key="status.id"
                      >
                        <td
                          style="flex: 1 1 0%; text-align: center"
                          class="font-medium"
                        >
                          <a
                            href="javascript:void(0)"
                            @click="abrirModalDetalhes(status)"
                            >{{ status.status_name }}</a
                          >
                        </td>
                        <td
                          style="flex: 1 1 0%; text-align: center"
                          class="font-medium"
                          v-html="status.quantidade"
                        ></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div class="w-4/12">
            <div class="">
              <div
                style="
                  background: rgb(1, 12, 58);
                  border-radius: 8px;
                  padding: 5px;
                  color: rgb(255, 255, 255);
                  display: flex;
                  flex-direction: row;
                "
              >
                <div
                  style="
                    width: 10%;
                    writing-mode: vertical-lr;
                    transform: rotate(180deg);
                    text-align: center;
                    display: flex;
                    place-content: center;
                    align-items: center;
                  "
                >
                  <strong>Por Telefonista</strong>
                </div>
                <div
                  style="
                    width: 100%;
                    background: rgb(255, 255, 255);
                    border-radius: 10px;
                    padding: 10px;
                  "
                >
                  <table
                    style="
                      width: 100%;
                      border-collapse: collapse;
                      border-radius: 7px;
                    "
                  >
                    <thead>
                      <tr
                        style="background: rgb(1, 12, 58); border-radius: 7px"
                      >
                        <th style="flex: 1 1 0%">NOME</th>
                        <th style="flex: 1 1 0%">CONCLUÍDOS</th>
                        <th style="flex: 1 1 0%">PENDENTES</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        v-for="telefonista in telefonistasComMaisLigacoesMes"
                        :key="telefonista.id"
                        style="
                          border-radius: 7px;
                          color: rgb(0, 0, 0);
                          padding-top: 5px;
                          padding-bottom: 5px;
                        "
                      >
                        <td
                          style="flex: 1 1 0%; text-align: center"
                          class="font-medium"
                          v-html="telefonista.nome"
                        ></td>
                        <td
                          style="flex: 1 1 0%; text-align: center"
                          class="font-medium"
                          v-html="telefonista.concluidos"
                        ></td>
                        <td
                          style="flex: 1 1 0%; text-align: center"
                          class="font-medium"
                          v-html="telefonista.pendentes"
                        ></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
    <silig-modal :title-modal="statusSelecionado ? statusSelecionado.status_name : ''">
      <div>
        <div class="flex flex-col">
          <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
              <div
                class="table-responsive"
                style="overflow: hidden; overflow-y: auto; max-height: 300px"
              >
                <table class="w-full text-center text-sm font-light">
                  <thead class="border-b font-medium dark:border-neutral-500">
                    <tr>
                      <th scope="col" class="px-6 py-2">#</th>
                      <th scope="col" class="px-6 py-2">Nome</th>
                      <th scope="col" class="px-6 py-2">Consumo médio</th>
                      <th scope="col" class="px-6 py-2">Criado por</th>
                      <th scope="col" class="px-6 py-2">Feito em</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      class="border-b dark:border-neutral-500"
                      v-for="(cliente, index) in resultadosPorStatus.rows"
                      :key="cliente.id"
                    >
                      <td class="whitespace-nowrap px-6 py-2 font-medium">
                        #{{ index + 1 }}
                      </td>
                      <td class="whitespace-nowrap px-6 py-2 font-medium">
                        {{ cliente.full_name }}
                      </td>
                      <td class="whitespace-nowrap px-6 py-2">
                        {{ cliente.average_consumption }}
                      </td>
                      <td class="whitespace-nowrap px-6 py-2">
                        {{ cliente.user.name }}
                      </td>
                      <td class="whitespace-nowrap px-6 py-2">Ontem</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </silig-modal>
  </div>
</template>

<script>
import axios from "@/services/api";
import { Modal, Ripple, initTE } from "tw-elements";

import SiligModal from "@/components/SiligModal.vue";

export default {
  name: "Dashboard",
  components: {
    SiligModal,
  },
  data() {
    return {
      ligacoesConcluidas: 0,
      ligacoesPendentes: 0,
      mediaMensalLigacoes: 0,
      telefonistasComMaisLigacoesMes: [],
      ligacaoPorStatus: [],
      isHoje: false,
      isOntem: false,
      isEstaSemana: true,
      isEsteMes: false,
      isEsteAno: false,
      mesSelecionado: "",
      chartjs: null,
      isPainelVisivel: true,
      modalDetalhes: null,
      resultadosPorStatus: [],
      statusSelecionado: null,
    };
  },
  created() {},
  watch: {
    isHoje: function (val) {
      this.isOntem =
        this.isEstaSemana =
        this.isEsteMes =
        this.mesSelecionado =
          false;
      if (this.isHoje) {
        this.fetchRelatorios();
      }
    },
    isOntem: function (val) {
      this.isHoje =
        this.isEstaSemana =
        this.isEsteMes =
        this.mesSelecionado =
          false;
      if (this.isOntem) {
        this.fetchRelatorios();
      }
    },
    isEstaSemana: function (val) {
      this.isHoje = this.isOntem = this.isEsteMes = this.mesSelecionado = false;
      if (this.isEstaSemana) {
        this.fetchRelatorios();
      }
    },
    isEsteMes: function (val) {
      this.isHoje =
        this.isOntem =
        this.isEstaSemana =
        this.mesSelecionado =
          false;
      if (this.isEsteMes) {
        this.fetchRelatorios();
      }
    },
    mesSelecionado: function (val) {
      this.isHoje = this.isOntem = this.isEstaSemana = this.isEsteMes = false;
      if (this.isEsteMes) {
        this.fetchRelatorios();
      }
    },
  },
  async mounted() {
    initTE({ Modal, Ripple });
    if (this.modalDetalhes) {
      this.modalDetalhes.hide();
    }
    this.modalDetalhes = new Modal("#exampleModalLg");
    this.fetchRelatorios();
  },
  methods: {
    async fetchDetalhes() {
      const isHoje = this.isHoje ? 1 : 0;
      const isOntem = this.isOntem ? 1 : 0;
      const isEstaSemana = this.isEstaSemana ? 1 : 0;
      const isEsteMes = this.isEsteMes ? 1 : 0;

      if(!this.statusSelecionado){ return;}
      const { data } = await axios.request({
        method: "GET",
        url: `/reports/get_clientes_por_status_e_data/${this.statusSelecionado.id}`,
        params: { isEsteMes, isHoje, isOntem, isEstaSemana },
      });
      if (data.data) {
        this.resultadosPorStatus = data.data;
      }
    },
    abrirModalDetalhes(statusSelecionado) {
      console.log(statusSelecionado);
      this.statusSelecionado = statusSelecionado;
      this.fetchDetalhes();
      this.modalDetalhes.show();
    },
    esconderPainelFiltro() {
      this.isPainelVisivel = !this.isPainelVisivel;
    },
    async fetchRelatorios() {
      const ctx = document.getElementById("myChart");

      if (this.chartjs) {
        this.chartjs.destroy();
      }

      const isHoje = this.isHoje ? 1 : 0;
      const isOntem = this.isOntem ? 1 : 0;
      const isEstaSemana = this.isEstaSemana ? 1 : 0;
      const isEsteMes = this.isEsteMes ? 1 : 0;

      const responseAll = await axios.request({
        method: "GET",
        url: `/reports`,
        params: { isEsteMes, isHoje, isOntem, isEstaSemana },
      });

      this.mediaMensalLigacoes = responseAll.data.data.media_mensal_ligacoes;
      this.ligacoesPendentes = responseAll.data.data.ligacoes_pendentes;
      this.ligacoesConcluidas = responseAll.data.data.ligacoes_concluidas;
      this.telefonistasComMaisLigacoesMes =
        responseAll.data.data.telefonistas_com_mais_ligacoes_mes;
      this.ligacaoPorStatus = responseAll.data.data.ligacao_por_status;

      const ligacoesRealizadasEmCadaDia =
        responseAll.data.data.get_ligacoes_realizadas_em_cada_dia;

      const dadosMes = ligacoesRealizadasEmCadaDia;
      const dias = dadosMes.map((dia) => dia.dia);
      const quantidade = dadosMes.map((dia) => dia.quantidade);

      var cores = [];

      for (var i = 0; i < dias.length; i++) {
        var d = new Date(2023, 3, dias[i]); // Supondo que o ano é 2023 e o mês é abril (índice 3)
        if (d.getDay() == 0 || d.getDay() == 6) {
          cores.push("yellow");
        } else {
          cores.push("blue"); // Defina a cor padrão para os outros dias
        }
      }

      this.chartjs = new Chart(ctx, {
        type: "bar",
        data: {
          labels: dias,
          datasets: [
            {
              label: "Contatos Realizados Mensalmente",
              data: quantidade,
              backgroundColor: cores,
              borderWidth: 1,
            },
          ],
        },
        options: {
          maintainAspectRatio: false,
          responsive: true,
          height: 200,
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    },
  },
};
</script>

<style>
input[type="radio"]:checked + label {
  background-color: #3b82f6;
  color: #fff;
}
</style>
