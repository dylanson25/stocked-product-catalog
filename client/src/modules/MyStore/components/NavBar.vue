<template>
  <b-navbar class="is-dark">
    <template #end>
      <b-navbar-item tag="div">
        <div class="buttons">
          <Button
            @click="$router.push({ name: 'product-add' })"
            type="is-primary  is-light"
            icon-right="clipboard-plus-outline"
          />
          <Button
            label="Cerrar seción"
            @click="$router.push({ name: 'auth' })"
            type="is-danger"
            icon-right="logout"
          />
        </div>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
import { Button } from "@/components";
export default {
  components: {
    Button,
  },
};
</script>

<style lang="sass" scoped></style>
