<template>
  <div class="index-page">
    <h1 class="title">TO DO LIST APP WITH NUXTJS</h1>
    <NuxtLink to="/main/todolist">Go to Todolist</NuxtLink>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style land="scss" scoped>
.title {
  font-weight: bold;
  margin-bottom: 15px;
}
</style>
