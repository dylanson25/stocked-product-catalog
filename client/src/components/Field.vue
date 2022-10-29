<template>
  <b-field
    :label="label"
    :class="classes"
    :type="hasFocus ? ' ' : ''"
    :message="message"
  >
    <template v-if="$slots.default">
      <slot name="default" />
    </template>
    <b-input
      v-else
      v-model="model"
      v-bind="{ ...$attrs, ...$props }"
      :validation-message="validationMessage || 'Datos incorrectos'"
      ref="input"
    />
  </b-field>
</template>
<script>
export default {
  computed: {
    classes() {
      let classes = ["Field"];
      if (this.required) classes.push("required");
      return classes.join(" ");
    },
  },
  data() {
    return {
      model: this.value,
      hasFocus: false,
    };
  },
  props: {
    value: {},
    message: { type: String, default: null },
    required: { type: Boolean, default: false },
    validationMessage: { type: String, value: null },
    label: { type: String, default: null },
  },
};
</script>
<style lang="sass" scoped></style>
