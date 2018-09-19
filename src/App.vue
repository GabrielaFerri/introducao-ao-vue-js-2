<template lang="pug">
  v-app
    formulario
</template>

<script>
import Formulario from './components/Formulario'

export default {
  name: 'app',
  components: {
    Formulario,
  },
  data: () => ({
    items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
  }),
};
</script>
