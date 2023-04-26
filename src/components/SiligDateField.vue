<template>
  <div>
    <label
      for="data"
      class="block text-sm font-medium leading-6 text-gray-900"
      >{{ label }}</label
    >
    <div class="mt-2">
      <input
        type="date"
        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        :required="required"
        :name="name"
        :value="defaultValue.toISOString().split('T')[0]"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    defaultValue: {
      type: Date, // alterado de String para Date
      required: false,
      default: () => new Date() // valor padrão é uma função que retorna a data atual
    },
    value: {
      type: Date, // alterado de String para Date
      required: false,
      default: () => new Date() // valor padrão é uma função que retorna a data atual
    },
    name: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    required: {
      type: Boolean,
      default: false,
    },
  },
};

</script>

<style>
</style>
