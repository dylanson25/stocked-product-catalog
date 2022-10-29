<template>
  <section>
    <b-modal
      v-bind="{ ...$props, ...$attrs }"
      v-model="isModalActive"
      class="modal-component"
    >
      <div class="card">
        <div class="card-header">
          <div class="subtitle"><b>Movimiento de producto</b></div>
        </div>
        <div class="card-content">
          <form ref="form" @submit.prevent="onSubmit">
            <div class="flex">
              <b-field class="w-70" label="Tipo de movimiento">
                <b-select v-model="selected" placeholder="Entrada / salida">
                  <option
                    v-for="option in type"
                    :value="option.tipo"
                    :key="option.id"
                  >
                    {{ option.tipo }}
                  </option>
                </b-select>
              </b-field>
              <b-icon
                class="w-30"
                :icon="icon.name"
                :type="icon.type"
                size="is-medium"
              >
              </b-icon>
            </div>
            <b-field label="Cantidad">
              <b-input
                v-model="unidades"
                type="number"
                placeholder="Ex: 2"
                required
              />
            </b-field>
          </form>
        </div>
        <div class="card-footer">
          <Button
            label="Cerrar"
            @click.prevent="onCancel"
            class="card-footer-item"
            type="is-danger is-light"
          />
          <Button
            label="Aprovar"
            @click.prevent="onSubmit"
            class="card-footer-item"
            type="is-primary"
          />
        </div>
      </div>
    </b-modal>
    <Button
      label="Entrada / Salida"
      @click.prevent="() => (isModalActive = true)"
      type="is-primary is-light"
    />
  </section>
</template>
<script>
import { Button } from "@/components";
import { mapActions } from "vuex";
export default {
  components: {
    Button,
  },
  data() {
    return {
      type: [
        {
          id: 0,
          tipo: "Salida",
        },
        {
          id: 1,
          tipo: "Entrada",
        },
      ],
      selected: null,
      unidades: null,
      isModalActive: false,
    };
  },
  computed: {
    icon() {
      let icon = {};
      if (!this.selected) {
        icon.name = "help-box";
        icon.type = "";
      } else if (this.selected === "Salida") {
        icon.name = "arrow-down-box";
        icon.type = "is-danger";
      } else {
        icon.name = "arrow-up-bold-box";
        icon.type = "is-success";
      }
      return icon;
    },
  },
  methods: {
    ...mapActions("socketio", ["newEntryOut"]),
    onCancel() {
      this.isModalActive = false;
      this.$emit("cancel");
    },
    async onSubmit() {
      if (this.validate()) {
        try {
          let type_activity = this.selected === "Entrada" ? 1 : 0;
          console.log(this.unidades);
          this.newEntryOut({
            product_id: this.$route.params.id,
            type_activity,
            unidades: this.unidades,
          });
          this.isModalActive = false;
          this.$emit("cancel");
        } catch (error) {
          console.log(error);
        }
      }
    },
    resetForm() {
      this.unidades = null;
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
    productId: { type: String, default: "0" },
  },
};
</script>
<style lang="sass" scoped>
.modal
    ::v-deep
        .modal-content
            display: flex
            justify-content: center
            align-items: center
.card
    min-width: 300px
    .card-header
        display: flex
        justify-content: center
        .subtitle
            margin: 16px
    .card-footer
        display: flex
        justify-content: space-evenly
.flex
    display: flex
    justify-content: space-evenly
    align-items: center
    margin-bottom: 16px
    .w-70
        width: calc( 70% - 16px )
    .w-30
        width: calc( 30% - 16px )
</style>
