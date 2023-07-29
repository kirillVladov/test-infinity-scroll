<script lang="ts" setup>
import type { BeerItem } from "../../../types/beer";
import InfinityScrollComponent from "../common/InfinityScrollComponent.vue";
import BeerItemComponent from "./BeerItemComponent.vue";

defineProps({
    beerList: {
        type: Array as () => BeerItem[],
        required: true
    }
})

const emit = defineEmits(["upload"]);
const onUploadList = () => {
  emit("upload");
}
</script>

<template>
  <div class="beer__list">
      <infinity-scroll-component @upload="onUploadList">
          <beer-item-component
              v-for="item in beerList"
              :item="item"
              :key="`beer-item-${item?.id}`"
          />
      </infinity-scroll-component>
  </div>
</template>

<style scoped>

</style>