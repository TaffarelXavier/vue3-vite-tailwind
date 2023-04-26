<template>
  <div>
    <button
      @click="fnMensagem(123456 * Math.random())"
      class="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-red-500"
    >
      Enviar mensagem para o pai {{ person }}
    </button>
  </div>
</template>

<script>
export default {
  props: {
    person: {
      type: Object,
      required: true,
    },
  },
  methods: {
    fnMensagem(data) {
      this.$emit("mensagem", data);
    },
  },
};
</script>
