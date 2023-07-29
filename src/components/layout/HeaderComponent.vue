<script lang="ts" setup>
import HeaderLinksList from "../../mocks/HeaderLinksList.ts";
</script>

<template>
  <div class="header">
      <div class="header__logo">
          test-logo
      </div>
      <div class="header__link">
        <div class="header__link-item" v-for="item in HeaderLinksList">
          <router-link :to="item.link">
              {{item.name}}
          </router-link>
        </div>
      </div>
  </div>
</template>