<script>
export default {
  name: 'BaseButton',
  props: ['text']
}
</script>

<template>
  <!-- This v-on="$listeners" is a way
  to assign events to an element in a component.
  Without it, Vue does not know where to listen
  for the events. -->
  <button v-on="$listeners">
    <slot></slot>
  </button>
</template>

<style lang="scss">
  button {
    margin: 8px;
    padding: 8px 32px;
    border: 0;
    border-radius: 32px;
    outline: none;
    color: white;
    font-weight: bold;
    background: coral;

    &:hover {
      background: darken(coral, 10%);
    }
  }
</style>
