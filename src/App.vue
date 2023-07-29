<script setup lang="ts">
import HeaderComponent from "./components/layout/HeaderComponent.vue";
</script>

<template>
    <header-component />
    <div class="content">
        <router-view />
    </div>
</template>

<style lang="scss">
 @import "@/style/base.scss";
</style>
