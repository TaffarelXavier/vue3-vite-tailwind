<template>
  <div>
    <label
      for="country"
      class="block text-sm font-medium leading-6 text-gray-900"
      >{{ label }}</label
    >
    <div class="mt-2">
      <select
        :name="name"
        :required="required"
        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
      >
        <option value="" disabled selected>--SELECIONE--</option>
        <option
          :selected="item[fieldsName[0]] == (dataSelected ? dataSelected[fieldsName[0]] : '')"
          v-for="item in data"
          :key="item.id"
          :value="item[fieldsName[0]]"
          v-text="item[fieldsName[1]]"
        ></option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    dataSelected: {
      type: Object,
      required: false,
    },
    required: {
      type: Boolean,
      default: false,
    },
    fieldsName: {
      type: Array,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    data: {
      type: Array,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
  },
};
</script>

<style>
</style>
