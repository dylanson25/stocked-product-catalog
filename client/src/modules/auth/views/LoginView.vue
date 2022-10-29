<template>
  <section id="login">
    <div class="card">
      <div class="card-content">
        <h1>Mi tiendita</h1>
        <form ref="form" @submit.prevent="onSubmit">
          <b-field label="Correo electronico">
            <b-input
              placeholder="Email"
              v-model="user.full_name"
              type="email"
              icon="email"
            >
            </b-input>
          </b-field>
          <b-field label="Contraseña">
            <b-input
              v-model="user.password"
              type="password"
              placeholder="Password reveal input"
              password-reveal
            >
            </b-input>
          </b-field>
          <b-checkbox v-model="isChecked">Recordarme</b-checkbox>
          <Button
            label="Iniciar sesión"
            type="is-primary"
            @click="onSubmit"
            expanded
          />
        </form>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { Button } from "@/components";
export default {
  components: {
    Button,
  },
  data() {
    return {
      user: {},
      isChecked: false,
    };
  },
  computed: {
    ...mapGetters("socketio", ["getStatus"]),
  },
  watch: {
    getStatus() {
      console.log(this.getStatus);
      if (this.getStatus === "authenticated") {
        this.$router.push({ name: "MyStore" });
      }
    },
  },
  methods: {
    ...mapActions("socketio", ["signOrCreateUser"]),
    async onSubmit() {
      if (this.validate()) {
        try {
          this.signOrCreateUser(this.user);
        } catch (error) {
          console.log(error);
        }
      }
    },
    resetForm() {
      this.user = {
        email: null,
        password: null,
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
};
</script>

<style lang="sass" scoped>
#login
  align-items: center
  background-color: #F8F7FD
  display: flex
  height: 100%
  justify-content: center
  width: 100%
  .card
    display: flex
    justify-content: center
    border-radius: 30px
    padding:  20px
    width: 400px
    .card-content
      width: 100%
      h1
        text-align: center
        font-size: 20px
        font-weight: 700
        margin-bottom: 16px
      .b-checkbox
        margin-top: 16px
        margin-bottom: 24px
    .card-footer
      display: flex
      justify-content: flex-end
      margin: 16px
      .button
        margin-top: 16px
</style>
