<template>
  <div class="container">
    <div class="no-product">
      <h1>No hay producto seleccionado</h1>
      <p>Agregar un producto nuevo</p>
      <b-button
        class="is-primary is-light"
        @click="$router.push({ name: 'product-add' })"
      >
        <b-icon icon="clipboard-plus-outline" size="is-medium"> </b-icon>
      </b-button>
    </div>
  </div>
</template>
<script>
import ProductView from "./ProductView.vue";
export default {
  components: {
    ProductView,
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
