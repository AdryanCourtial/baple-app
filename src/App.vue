<template>
  <div id="app">
    <RouterView v-slot="{ Component }">
        <transition name="fade">
          <component :is="Component" />
        </transition>
      </RouterView>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  font-family: 'Montserrat', 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
</style>
