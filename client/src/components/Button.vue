<template>
  <b-skeleton v-if="skeletonLoading" class="button" />
  <b-button v-else v-bind="{ ...$attrs, ...$props }" @click.stop="onClick">
    <slot />
  </b-button>
</template>
<script>
export default {
  methods: {
    onClick(e) {
      this.$emit("click", e);
    },
  },
  props: {
    disabled: { type: Boolean, default: false },
    skeletonLoading: { type: Boolean, default: false },
  },
};
</script>
<style lang="sass" scoped>
.b-skeleton
  border: none
  margin-top: 0px
  padding: 0
  width: auto
  ::v-deep
    .b-skeleton-item
      min-height: 40px
      min-width: 70px
</style>
