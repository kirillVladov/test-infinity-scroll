<script lang="ts" setup>
import {onMounted, onUnmounted, ref} from "vue";

  const emit = defineEmits(["upload"]);
  const scrollWrap = ref(null)

  onMounted(() => {
      window.addEventListener("scroll", handleScroll)
  })

  onUnmounted(() => {
      window.removeEventListener("scroll", handleScroll)
  })

  const handleScroll = (e: Event) => {
      if ((scrollWrap.value as HTMLElement).getBoundingClientRect().bottom < window.innerHeight) {
          emit("upload")
      }
  }

</script>

<template>
  <div class="infinity-scroll" ref="scrollWrap">
    <slot></slot>
  </div>
</template>