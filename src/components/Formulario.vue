<template lang="pug">
  .formulario-de-n-sei-oq
    v-container(grid-list-md)
      v-layout(row wrap)
        v-flex.black(xs12)
          v-layout(justify-center)
            .title.white--text NitroCar
        v-flex(xs12)
          v-text-field(label="Nome" v-model="payload.nome")
        v-flex(xs6)
          v-text-field(label="Data de Nascimento" v-model="payload.dataDeNascimento")
        v-flex(xs6)
          v-text-field(label="RG" v-model="payload.rg")
        v-flex(xs6)
          v-text-field(label="CPF" v-model="payload.cpf")
        v-flex(xs6)
          v-text-field(label="E-mail" v-model="payload.email")
        v-flex(xs6)
          v-text-field(label="Fone" v-model="payload.fone")
        v-flex(xs6)
          v-text-field(label="Cidade" v-model="payload.cidade")
        v-flex(xs12)
          v-select(:items="items" label="Estado Civil" v-model="payload.estadoCivil")
        v-flex(xs12)
          v-btn.red.white--text(block @click="cadastrar") SALVAR CADASTRO

        v-data-table
        //- .table === <div class="table">
        //- .table: (:hearders="hearders"
        //-         items="desserts"
        //-         hide-actions
        //-           class="elevation-1")
        //-   .slot="items"
        //-   .slot="props"

<script>
import Service from './FormularioService';

export default {
  data: () => ({
    items: ['solteiro (a)', 'casado (a)', 'divorciado (a)', 'viúvo (a)'],
    payload: {
      nome: '',
      dataDeNascimento: '',
      rg: '',
      cpf: '',
      email: '',
      fone: '',
      cidade: '',
      estadoCivil: '',
    },
  }),
  methods: {
    cadastrar() {
      const { payload } = this;
      Service
        .cadastrarPessoa(payload)
        .then(({ response }) => {
          console.log(response);
        })
        .catch(({ error }) => {
          console.log(error);
        });
    },
  },
};
</script>
