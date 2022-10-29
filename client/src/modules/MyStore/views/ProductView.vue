<template>
  <form class="container-form" ref="form" @submit.prevent="onSubmit">
    <div class="w-30">
      <section class="form-image">
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
        <Field
          label="Imagen"
          v-model="product.imagen"
          placeholder="Example: http://***"
          required
        />
      </section>
      <section class="form-section form-container__1">
        <Field
          class="w-100"
          label="Codigo de barras"
          v-model="product.barcode"
          pattern="[0-9]*"
          min="13"
          max="13"
          placeholder="EX: 0021365485123657"
          validation-message="Solo se aceptan numeros"
          required
        />
        <Field
          label="Precio de venta"
          v-model="product.sale_price"
          class="w-50"
          type="number"
          placeholder="Ex: 24"
        />
        <Field
          label="Precio de compra"
          v-model="product.purchase_price"
          class="w-50"
          type="number"
          placeholder="Ex: 12"
        />
      </section>
    </div>
    <section class="form-section w-60 form-container__2">
      <div>
        <Field class="w-30" label="Nombre" v-model="product.nombre" required />
        <Field
          class="w-100"
          label="Descripcion"
          v-model="product.concepto"
          maxlength="150"
          placeholder="Caracteristicas del producto"
          type="textarea"
          required
        />
      </div>
      <div class="buttons-group w-100">
        <NewEntryOutModal v-if="!isNew" :productId="this.id" />
        <Button
          :label="addOrEdit"
          type="is-primary"
          @click.prevent="onSubmit"
        />
      </div>
    </section>
  </form>
</template>
<script>
import { Button, Field } from "@/components";
import { NewEntryOutModal } from "../components";
import { mapGetters, mapActions } from "vuex";
export default {
  components: {
    NewEntryOutModal,
    Button,
    Field,
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
  align-items: center
  flex-direction: row
  width: 100%
  height: 100%
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

  .w-70
    width: calc( 70% - 16px )
  .w-50
    width: calc( 50% - 8px )
  .w-60
    width: calc( 60% - 16px )
  .w-30
    width: calc( 30% - 16px )
  .w-100
    width: 100%
  .form-container__1
    display: flex
    flex-direction: row
    flex-wrap: wrap
    justify-content: space-between
  .form-container__2
    height: 65%
    display: flex
    flex-direction: column
    justify-content: space-between
</style>
<style scoped>
@media (max-width: 754px) {
  .container-form .w-30 {
    width: 100%;
  }
  .container-form .w-70 {
    width: 100%;
  }
}
</style>
