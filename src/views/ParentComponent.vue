<template>
  <div>
    <h1>Mensagens do filho:</h1>
    <ul>
      <li v-for="mensagem in mensagens" :key="mensagem">{{ mensagem }}</li>
    </ul>
    <meu-componente-filho
      :person="person"
      @mensagem="adicionarMensagem"
    ></meu-componente-filho>
    <br />
    <br />
    <button @click="fnMensagem('123456')">
      Enviar para o componente Filho
    </button>
  </div>
</template>

<script>
import MeuComponenteFilho from "./MeuComponenteFilho.vue";

export default {
  components: {
    MeuComponenteFilho,
  },
  data() {
    return {
      mensagens: [],
      person: {
        name: "Maria",
        age: 25,
      },
    };
  },
  methods: {
    adicionarMensagem(mensagem) {
      this.mensagens.push(mensagem);
    },
    fnMensagem(data) {
      this.person = {
        name: "João",
        age: 30,
      };
      this.$emit("mensagem", data);
    },
  },
};
</script>
