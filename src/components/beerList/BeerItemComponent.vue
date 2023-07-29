<script lang="ts" setup>
import type { BeerItem } from "../../../types/beer";

defineProps({
    item: {
        type: Object as () => BeerItem,
        required: true
    }
})
</script>

<template>
  <div class="beer__item">
      <div class="beer__item__image">
        <img :src="item.image_url" :alt="item.name" />
      </div>
      <div class="beer__item__info">
          <div class="beer__item__info-name">
            {{item.name}}
          </div>
          <div class="beer__item__info-description">
            {{item.description}}
          </div>
      </div>
  </div>
</template>

