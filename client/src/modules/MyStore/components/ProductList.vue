<template>
  <section class="sidebar-layout">
    <b-sidebar position="static" mobile="Fullwidth" type="is-light" open>
      <b-menu-list label="Productos"> </b-menu-list>
      <b-autocomplete
        rounded
        placeholder="e.g. jQuery"
        icon="magnify"
        clearable
      >
        <!-- v-model="name"
        :data="filteredDataArray"
        @select="(option) => (selected = option)" -->
        <template #empty>No results found</template>
      </b-autocomplete>
      <div class="p1 entry-scrollarea">
        <Product v-for="item in data" :key="item.barcode" :value="item" />
      </div>
    </b-sidebar>
  </section>
</template>

<script>
import Product from "./Product.vue";
export default {
  components: {
    Product,
  },
  data() {
    return {
      data: [
        {
          nombre: "Atun",
          sale_price: 12,
          purchase_price: 10,
          stock: 20,
          concepto: "Lata de atun en aceite con omega 3 reforzado",
          imagen:
            "https://recetinas.com/wp-content/uploads/2022/02/comidas-faciles-rapidas-ricas-1200x799.jpg",
          barcode: "0024695713846",
        },
        {
          nombre: "Frijoles",
          sale_price: 18,
          purchase_price: 15,
          stock: 7,
          concepto: "Frijol negro organico de zacualpan tamaulipas",
          imagen:
            "https://recetinas.com/wp-content/uploads/2022/02/comidas-faciles-rapidas-ricas-1200x799.jpg",
          barcode: "0124695773846",
        },
        {
          nombre: "Caramelo de cajeta",
          sale_price: 4,
          purchase_price: 2,
          stock: 25,
          concepto: "Dulce de leche de vaca, con colorante artificial",
          imagen:
            "https://recetinas.com/wp-content/uploads/2022/02/comidas-faciles-rapidas-ricas-1200x799.jpg",
          barcode: "0224695713846",
        },
        {
          nombre: "Clorets menta",
          sale_price: 1,
          purchase_price: 0.5,
          stock: 120,
          concepto: "Chicle sabor menta con 2pz",
          imagen:
            "https://recetinas.com/wp-content/uploads/2022/02/comidas-faciles-rapidas-ricas-1200x799.jpg",
          barcode: "0324565713846",
        },
        {
          nombre: "Monster toronja",
          sale_price: 50,
          purchase_price: 23,
          stock: 25,
          concepto:
            "Bebida energetica monster con colorante naranja sabor toronja",
          imagen:
            "https://recetinas.com/wp-content/uploads/2022/02/comidas-faciles-rapidas-ricas-1200x799.jpg",
          barcode: "0427695713846",
        },
      ],
    };
  },
};
</script>

<style lang="sass" scoped>
.sidebar-layout .b-sidebar
  .autocomplete
    margin-left: 8px
    margin-right: 8px
  ::v-deep
    .sidebar-content
      box-shadow: none
      -webkit-box-shadow: none
      width: 300px
.entry-scrollarea
    height: 100%
    overflow: scroll
</style>
