<script setup>
import { VMap, VMapOsmTileLayer, VMapZoomControl } from 'vue-map-ui';
</script>

<template>
  <VMap class="w-full" style="height: 200px;">
    <VMapOsmTileLayer />
    <VMapZoomControl />
  </VMap>
</template>
