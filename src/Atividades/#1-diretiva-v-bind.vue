<template lang="pug">
  .diretivas-v-bind
    .title Explicação do v-bind
      v-text-field(:value="titulo")
      p(v-if="condicao") Teste com IF
      p(v-for="x in registros") {{ x.titulo }}
      button(v-if="!clicou") salvar
      button(v-if="clicou")v-on:click="" aguarde
</template>

<script>
export default {
  data: () => ({
    titulo: 'V-Bind',
    condicao: true,
    registros: [
      {titulo:'registro1'},
      {titulo:'registro2'},
      {titulo:'registro3'},
      {titulo:'registro4'},
      {titulo:'registro5'},
    ],
    clicou: false
  }),
};
</script>
