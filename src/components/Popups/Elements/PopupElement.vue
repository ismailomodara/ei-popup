<script setup>
import { ref, watchEffect } from 'vue';
import { useDraggable } from '@vueuse/core';
import { useAppStore } from '@/store'

const props = defineProps(['element', 'boundary'])

const element = ref();
const handle = ref();
const outOfBound = ref(false);
const store = useAppStore()

const { x, y, style } = useDraggable(element, {
  initialValue: {
    y: props.element.offsetTop + props.boundary.top,
    x: props.element.offsetLeft + props.boundary.left
  },
  handle: handle
});

const setOffset = () => {
  const offsetTop = y.value - props.boundary.top
  const offsetLeft = x.value - props.boundary.left
  store.setElementAxis(props.element.id, offsetTop, offsetLeft)
}

watchEffect(() => {
  setOffset()
})



</script>

<template>
  <div
    ref="element"
    :class="['element', { 'out-of-bound': outOfBound }]"
    :style="style">
    <div class='element-actions'>
      <span class='element-actions-delete' @click="$emit('remove')">
        <i class="ei-icon--trash" />
      </span>
      <span ref='handle' class='element-actions-handle'>
        <i class='ei-icon--move' />
      </span>
    </div>

    <slot />
  </div>

</template>

<style scoped lang='scss'>
.element {
  position: fixed;
  user-select: none;

  &-actions {
    display: flex;
    justify-content: flex-end;
    position: relative;
    opacity: 0;
    cursor: move;

    span {
      height: 24px;
      width: 24px;
      background: #111111;
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      right: 0;
      top: 0;
      z-index: 1;

      i {
        color: var(--app-white)
      }
    }

    &-delete {
      cursor: pointer;
      right: 24px !important;
    }

    &-handle {
      cursor: move;
    }
  }

  &:hover {
    .element-actions {
      opacity: 1;
    }
  }
}


</style>
