<template lang="pug">
  .formulario-de-uma-garagem-de-carro
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
          .title {{ payload.estadoCivil }} to aqui
          v-select(
            item-text="titulo"
            label="Estado Civil"
            :items="estadoCivil"
            v-model="payload.estadoCivil"
            )
        v-flex(xs12)
          v-btn.red(block @click="") SALVAR CADASTRO
        v-flex(xs12)
          v-data-table(
            hide-actions
            :items="items"
            :headers="headers"
            class="elevation-1"
            )
            template(slot="items" slot-scope="props")
               td {{ props.item.nome }}
               td {{ props.item.idade }}
</template>

<script>
export default {
  data: () => ({
    estadoCivil: [
      {
        titulo: 'Solteiro',
        value: false,
      },
      {
        titulo: 'Casado',
        value: true,
      },
    ],
    items: [
      {
        nome: 'Teste 1',
        idade: 25
      },
      {
        nome: 'Teste 2',
        idade: 30
      },
    ],
    payload: {
      nome: '',
      dataDeNascimento: '',
      rg: '',
      cpf: '',
      email: '',
      fone: '',
      cidade: '',
    },
    headers: [
      {
        text: 'Nome',
        sortable: false,
      },
      {
        text: 'Idade',
        sortable: false,
      },
    ],
    methods: {
      cadastrar() {

      },

      editarCadastro() {

      },

      buscarLista() {

      },

      excluirUsuario() {

      },

      buscarUsuario() {

      },

    }
  }),
};
</script>
