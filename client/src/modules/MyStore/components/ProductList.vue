<template>
  <section class="sidebar-layout">
    <b-sidebar position="static" mobile="Fullwidth" type="is-light" open>
      <b-menu-list label="Productos"> </b-menu-list>
      <b-input
        v-model="term"
        rounded
        placeholder="e.g. jQuery"
        icon="magnify"
        clearable
      >
        <!-- v-model="name"
        :data="filteredDataArray"
        @select="(option) => (selected = option)" -->
        <template #empty>No results found</template>
      </b-input>
      <div class="p1 entry-scrollarea">
        <Product v-for="item in productByterm" :key="item.id" :value="item" />
      </div>
    </b-sidebar>
  </section>
</template>

<script>
import Product from "./Product.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  beforeMount() {
    this.get_products();
  },
  components: {
    Product,
  },
  computed: {
    ...mapGetters("socketio", ["getProductByterm"]),
    productByterm() {
      return this.getProductByterm(this.term);
    },
  },
  methods: {
    ...mapActions("socketio", ["get_products"]),
  },
  data() {
    return {
      term: "",
      data: [],
    };
  },
};
</script>

<style lang="sass" scoped>
.sidebar-layout
  .b-sidebar
    .autocomplete
      margin-left: 8px
      margin-right: 8px
    ::v-deep
      .sidebar-content
        box-shadow: none
        -webkit-box-shadow: none
        width: 300px
.entry-scrollarea
    height: 90%
    overflow: scroll
</style>
