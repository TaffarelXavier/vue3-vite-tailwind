<template>
  <fieldset class="border p-4">
    <legend class="text-lg font-medium">Dados Pessoais</legend>
    <div class="my-4">
      <label class="block text-gray-700 font-bold mb-2" for="nome">
        Nome Completo
      </label>
      <input
        class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="nome"
        type="text"
        placeholder="Digite seu nome completo"
      />
    </div>
    <div class="my-4">
      <label class="block text-gray-700 font-bold mb-2" for="email">
        E-mail
      </label>
      <input
        class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="email"
        type="email"
        placeholder="Digite seu e-mail"
      />
    </div>
  </fieldset>
</template>

<script>
export default {};
</script>

<style>
</style>
