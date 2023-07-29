<script lang="ts" setup>
import TechList from "../mocks/TechList.ts";
</script>

<template>
  <div class="start">
      <h2>
        Example infinity scroll :)
      </h2>
      <ul>
          <li
                  v-for="item in TechList"
                  :key="`tech-item-${item.id}`"
          >
              {{item.name}}
          </li>
      </ul>
  </div>
</template>

<style scoped lang="scss">
  @import "../style/start";
</style>
