<template lang="pug">
  .display-2 com v-bind
    v-container(grid-list-xl)
      v-layout(row wrap)
        .title Exercicio 1 - Nos text-field abaixo utilize a diretiva v-bind para imprimir nomes de bandas de rock.
        v-flex.mt-5(xs12)
          span resposta:
          p(v-for= "banda in bandas") {{ banda }}
          v-text-field(:value="bandas")
        v-flex.mt-5(xs12)
          v-text-field(:value="bandas")
        v-flex.mt-5(xs12)
          v-text-field(:value="bandas")
        v-flex(xs12)
        .title Exericio 1 - hardcore - Faça a mesma coisa do exercicio anterior só que utilize um array, e uma laço de repetição (v-for) no value para repetir os text-field ao menos com o nome de 3 bandas.
        v-flex.mt-5(xs12)
          p(v-for= "banda in bandas") {{ banda }}
          v-text-field(value="bandas")
        .title Exericio 2 - hardcore - Montar um v-select com v-bind com um array onde ele use o array, de cores, porém imprima abaixo o número da cor.
        v-flex.mt-5(xs12)
          v-select(
              :items="cores"
              item-value="numero"
              item-text="titulo"
              ) {{ cores.titulo }}
        v-flex.mt-5(xs12)
          .title Exericio 3 - Utilizando a diretiva v-model, altere os valores de numeroUm e numeroDois, para qualquer outro entre 100~1000, amarre os valores das variaveis numeroUm e numeroDois e faça um método que multiplique um pelo outro e imprima o resulto a frente.  {{ Math.random(1000) }}
        v-flex.mt-5(xs6)
          v-text-field(label="numeroUm")
        v-flex.mt-5(xs6)
          v-text-field(label="numeroDois")
        v-flex(xs12)
          .title.blue Eis seu resultado {{ Math.random(1000) }}
        v-flex.mt-5(xs12)
          .title BONUS - Brevemente me diga o que é um computed no VUEJS. Com a mesma ideia do exercico anterior, ao invés de usar um método use uma computed.
</template>

<script>
export default {
  data: () => ({
    select: 'text',
    bandas: ['velhas virgens', 'garotos podres', 'blink 182'],
    numeroUm: 0,
    numeroDois: 0,
    resultadoDaMultiplicacao: 0,
    cores: [
        { titulo: 'branco', numero: '1' },
        { titulo: 'preto', numero: '2' },
        { titulo: 'cinza', numero: '3' },
        { titulo: 'verde', numero: '4' },
      ],
    })
  };
</script>
