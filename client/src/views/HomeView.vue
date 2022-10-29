<template>
  <div class="container">
    <Button label="touch me hared" type="is-success" @click="prueba" />
  </div>
</template>

<script>
import { Button } from "@/components";
export default {
  components: {
    Button,
  },
  methods: {
    prueba() {
      console.log("object");
    },
  },
};
</script>

<style lang="sass" scoped>
.container
  display: flex
  align-items: center
  justify-content: center
  height: 100%
  background-color: grey
</style>
