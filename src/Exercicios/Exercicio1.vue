<template lang="pug">
  v-container(grid-list-xl)
    v-layout(row wrap)
      .title Exercicio 1 - Aprendendo a imprimir variaveis, use apenas variaveis do seu data.
      v-flex.mt-5(xs12)
        .subheading A) Imprima seu nome aqui usando apenas deus js: {{ nome }}
      v-flex(xs12)
        span.text-align-left B) imprima sua idade aqui apenas utilizando o JS, mas traga o resultado multiplicado por 3: {{ idade * 3 }}
      v-flex(xs12)
        span.text-align-left C) traga aqui um resultado aleatório entre 0 e 50.: {{ Math.random(50) }}
      v-flex(xs12)
        v-divider
      .title Exercicio 2 - Utilizando a diretiva v-for imprima uma lista contendo algumas frutas que compõem uma boa salada de frutas.
      v-flex(xs12)
        span Resposta:
        p(v-for="fruta in frutasGabarito") {{ fruta }}
      v-flex(xs12)
        v-divider
      .title Exercicio 3 - Renderize o array de passos até o passo 3 apenas.
      v-flex(xs12)
        v-container(grid-list-md)
          v-layout(row wrap)
            v-flex.blue(v-for="passo in passos" xs4)
              v-card(v-if="renderizarOuNao(passo.ordem)" raised hover )
                v-card-title.title {{ passo.ordem }}
                v-card-text.title {{ passo.nome }}
</template>

<script>

export default {
  data: () => ({
    nome: 'valério',
    idade: '25',
    passos: [
      {
        ordem: 1,
        nome: 'passo um',
      },
      {
        ordem: 2,
        nome: 'passo dois',
      },
      {
        ordem: 3,
        nome: 'passo tres',
      },
      {
        ordem: 4,
        nome: 'passo quatro',
      },
      {
        ordem: 5,
        nome: 'passo cinco',
      },
      {
        ordem: 6,
        nome: 'passo seis',
      },
    ],
    usuario: {
      nome: 'Valério',
        idade: '25',
      },
    frutasGabarito: ['banana', 'maça', 'uva'],
  }),
  methods: {
    renderizarOuNao(passo) {
      if (passo % 2 !== 0 ) return true
      return false
    },
  },
};
</script>
