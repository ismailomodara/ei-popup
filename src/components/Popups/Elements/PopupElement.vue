<script setup>
import { ref, computed, watchEffect } from 'vue';
import { useDraggable, useElementBounding, clamp } from '@vueuse/core';
import { useAppStore } from '@/store'



const props = defineProps(['element', 'boundary'])
const draggable = ref();

const store = useAppStore()

const { width, height } = useElementBounding(draggable);
const { x, y } = useDraggable(draggable, {
  initialValue: { x: props.element.x, y: props.element.y}
});

const { top, right, bottom, left } = props.boundary

const restrictedX = computed(() =>
  clamp(left.value, x.value, right.value - width.value)
);
const restrictedY = computed(() =>
  clamp(top.value, y.value, bottom.value - height.value)
);


watchEffect(() => {
  store.setElementAxis(props.element.id, x.value, y.value)
})

</script>

<template>
  <div
    ref="draggable"
    :style="{
      userSelect: 'none',
      cursor: 'move',
      position: 'fixed',
      top: `${restrictedY}px`,
      left: `${restrictedX}px`,
    }">
    <slot />
  </div>

</template>
