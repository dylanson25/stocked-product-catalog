<template>
  <section class="card">
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <p class="title is-5">{{ data.nombre }}</p>
        </div>
        <b-button
          @click="
            $router.push({ name: 'product', params: { id: data.barcode } })
          "
          type="is-success"
          icon-right="arrow-collapse-right"
        />
      </div>
      <div class="content">
        <hr />
        <p class="subtitle">
          <b>{{ data.barcode }}</b>
        </p>
        {{ data.concepto }}
        <hr />
        <div class="info-price">
          Precio de compra:
          <b-icon icon="currency-usd" size="is-small" type="is-success">
          </b-icon>
          {{ data.purchase_price }}
          <br />
          Precio de venta:
          <b-icon icon="currency-usd" size="is-small" type="is-success">
          </b-icon>
          {{ data.sale_price }}
        </div>
      </div>
      <footer class="card-footer">
        <time class="card-footer-item" datetime="2016-1-1">1 Jan 2016</time>
        <p class="card-footer-item"><b>Stock-</b>{{ data.stock }}</p>
      </footer>
    </div>
  </section>
</template>

<script>
export default {
  name: "Product",
  data() {
    return {
      data: this.value,
    };
  },
  props: {
    value: { type: Object, default: () => {} },
  },
};
</script>

<style lang="sass" scoped>
.card
  margin-top: 16px
  margin-left: 8px
  .card-content
    padding: 16px
    .media
      display: flex
      justify-content: space-between
      align-items: center
      .media-left .title
        font-size: 20px
        color: #424047
.subtitle
  font-size: 12px
</style>
