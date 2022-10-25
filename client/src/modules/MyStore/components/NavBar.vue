<template>
  <b-navbar class="is-dark">
    <template #end>
      <b-navbar-item tag="div">
        <div class="buttons">
          <b-button
            type="is-primary  is-light"
            @click="$router.push({ name: 'product-add' })"
            icon-right="clipboard-plus-outline"
          ></b-button>
          <b-button type="is-danger" icon-right="logout"
            >Cerrar seción</b-button
          >
        </div>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script></script>

<style lang="sass" scoped></style>
