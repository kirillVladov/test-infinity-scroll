<script lang="ts" setup>
import {onBeforeMount, onUnmounted, ref} from "vue";
import {useBeerStore} from "../stores/beer";
import PreloaderComponent from "../components/common/PreloaderComponent.vue";
import {usePreloaderStore} from "../stores/preloader";
import BeerListComponent from "../components/beerList/BeerListComponent.vue";

const beerStore = useBeerStore();
const preloaderStore = usePreloaderStore();
const page = ref<number>(1);

onBeforeMount(() => {
    uploadList();
})

onUnmounted(() => {
    beerStore.$reset();
})

const uploadList = () => {
    beerStore.getList(page.value)
}

const onUploadList = () => {
    page.value++;
    uploadList();
}
</script>

<template>
  <div class="beer">
      <beer-list-component
              v-if="!preloaderStore.isShow && beerStore.getBeerList.length"
              :beer-list="beerStore.getBeerList"
              @upload="onUploadList"
      />
      <preloader-component
              v-else-if="preloaderStore.isShow || !beerStore.getBeerList.length"
      />
      <div v-else>
          Nothing:(
      </div>
  </div>
</template>

<style lang="scss">
  @import "../style/beer/index";
</style>
