<template>
  <div>
    <form class="container-form" ref="form" @submit.prevent="onSubmit">
      <section class="form-image w-100">
        <div class="card">
          <div class="card-image">
            <figure class="image">
              <img
                :src="
                  product.imagen
                    ? product.imagen
                    : 'https://bulma.io/images/placeholders/1280x960.png'
                "
                alt="Placeholder image"
              />
            </figure>
          </div>
        </div>
        <b-field label="Imagen">
          <b-input
            v-model="product.imagen"
            placeholder="Example: http://***"
            required
          >
          </b-input>
        </b-field>
      </section>
      <section class="form-section w-60">
        <b-field label="Nombre">
          <b-input v-model="product.nombre" required> </b-input>
        </b-field>
        <b-field label="Descripcion">
          <b-input
            v-model="product.concepto"
            maxlength="150"
            placeholder="Caracteristicas del producto"
            type="textarea"
            required
          >
          </b-input>
        </b-field>
      </section>
      <section class="form-section w-40">
        <b-field label="Codigo de barras">
          <b-input
            v-model="product.barcode"
            pattern="[0-9]*"
            min="13"
            max="13"
            placeholder="EX: 0021365485123657"
            validation-message="Solo se aceptan numeros"
            required
          ></b-input>
        </b-field>
        <b-field label="Precio de venta">
          <b-input
            v-model="product.sale_price"
            type="number"
            placeholder="Ex: 24"
          >
          </b-input>
        </b-field>
        <b-field label="Precio de compra">
          <b-input
            v-model="product.purchase_price"
            type="number"
            placeholder="Ex: 12"
          >
          </b-input>
        </b-field>
      </section>
      <div class="buttons-group w-100">
        <NewEntryOutModal v-if="!isNew" :productId="this.id" />
        <Button
          :label="addOrEdit"
          type="is-primary"
          @click.prevent="onSubmit"
        />
      </div>
    </form>
  </div>
</template>
<script>
import { Button } from "@/components";
import { NewEntryOutModal } from "../components";
import { mapGetters, mapActions } from "vuex";
export default {
  components: {
    NewEntryOutModal,
    Button,
  },
  data() {
    return {
      product: {},
    };
  },
  computed: {
    ...mapGetters("socketio", ["getProductById"]),
    isNew() {
      return this.id == "new";
    },
    addOrEdit() {
      return this.isNew ? "Agregar" : "Editar";
    },
  },
  watch: {
    id() {
      if (!this.isNew) {
        this.product = this.getProductById(this.id);
      }
    },
    isNew() {
      if (this.isNew) this.resetForm();
    },
  },
  methods: {
    ...mapActions("socketio", ["edit_product", "add_new_product"]),
    async onSubmit() {
      if (this.validate()) {
        try {
          if (this.$route.path === "/MyStore/product/add") {
            this.add_new_product(this.product);
          } else {
            this.edit_product(this.product);
          }
        } catch (error) {
          console.log(error);
        }
      }
    },
    resetForm() {
      this.product = {
        nombre: "",
        sale_price: null,
        purchase_price: null,
        stock: null,
        concepto: null,
        imagen: null,
        barcode: null,
      };
    },
    validate() {
      let htmlValidator;
      if (this.$refs.form) {
        htmlValidator = this.$refs.form.checkValidity();
        if (!htmlValidator) this.$refs.form.reportValidity();
      }
      return htmlValidator;
    },
  },
  props: {
    id: {
      type: String,
      default: "new",
    },
  },
};
</script>
<style lang="sass" scoped>
.container-form
  display: flex
  justify-content: center
  flex-direction: row
  width: 100%
  height: 90%
  flex-wrap: wrap
  .form-image
    display: flex
    justify-content: center
    flex-direction: column
    align-items: center
    margin: 8px
    .card
      max-width: 300px
    .card-image .image
      margin: 0
  .form-section
    margin: 8px
  .buttons-group
    display: flex
    justify-content: flex-end
    .button
      margin: 8px
    ::v-deep
      section .button
        margin: 8px

  .w-60
    min-width: calc( 60% - 16px )
  .w-40
    min-width: calc( 40% - 16px )
  .w-100
    min-width: calc( 100% - 16px )
</style>
<style scoped>
@media (max-width: 754px) {
  .container-form .w-60 {
    min-width: 95%;
  }
  .container-form .w-40 {
    min-width: 95%;
  }
}
</style>
