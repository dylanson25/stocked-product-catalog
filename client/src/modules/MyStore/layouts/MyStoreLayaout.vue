<template>
  <div id="my-store">
    <nav-bar />
    <div class="content">
      <product-list />
      <router-view />
    </div>
  </div>
</template>

<script>
import { ProductList, NavBar } from "../components";
export default {
  components: { ProductList, NavBar },
  data() {
    return {};
  },
};
</script>

<style lang="sass" scoped>
#my-store
  width: 100%
  height: 100%
  .content
    height: 96%
    display: flex
    width: 100%
    ::v-deep
      .b-sidebar
        height: 100%
        .sidebar-content
          height: 100%
</style>
