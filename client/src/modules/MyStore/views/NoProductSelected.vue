<template>
  <div class="container">
    <div class="no-product">
      <h1>No hay producto seleccionado</h1>
      <p>Agregar un producto nuevo</p>
      <Button class="is-primary is-light" @click="onNavigation">
        <b-icon icon="clipboard-plus-outline" size="is-medium"> </b-icon>
      </Button>
    </div>
  </div>
</template>
<script>
import { Button } from "@/components";
import ProductView from "./ProductView.vue";
export default {
  components: {
    ProductView,
    Button,
  },
  methods: {
    onNavigation() {
      this.$router.push({ name: "product-add" });
    },
  },
  data() {
    return {
      toggleAdd: false,
    };
  },
};
</script>
<style lang="sass" scoped>
.container
  display: flex
  justify-content: center
  align-items: center
  flex-direction: column
  .no-product
    display: flex
    justify-content: center
    align-items: center
    flex-direction: column
    h1
      color: #424047
      line-height: 140%
      font-size: 20px
    p
      font-size: 16px
      line-height: 140%
      text-align: center
      color: #64616B
    ::v-deep
      .button
        padding-top: 14px
</style>
