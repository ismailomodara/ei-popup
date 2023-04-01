<template>
  <div class='popup-settings-property'>
    <div class='label'>
      <span>{{ props.title }}</span>
      <slot name='label' />
    </div>
    <div class='control'>
      <slot name='control' />
    </div>
  </div>
</template>
<script setup>
const props = defineProps(['title'])
</script>

<style lang='scss' scoped>
.popup-settings-property {
  display: grid;
  grid-template-columns: 55% 45%;
  justify-content: space-between;
  justify-items: flex-start;
  align-items: center;
  margin-top: 10px;

  .label {
    display: grid;
    grid-template-columns: 1fr;

    span {
      font-size: 13px;
      color: var(--text-secondary);
    }
  }

  .control {
    width: 100%;
    display: grid;
    justify-items: flex-end;
  }
}
</style>
