<template>
    <DefaultLayout> 
        <div class="container">
            <Map></Map>
            <div class="contact">
                <h1 class="text-[36px] font-bold w-full text-center"> Contact </h1>
            </div>
        </div>
    </DefaultLayout>
</template>

<script setup lang="ts">
import DefaultLayout from '../layouts/DefaultLayout.vue';
import Map from '../components/Map.vue';
</script>

<style scoped>

.container {
    padding: 40px;
}
.contact {
    margin-top: 40px;
    max-width: 400px;
    width: 100%;
    height: 200px;
    border-radius: 10px;
    border: solid 1px #FF851B
} 
</style>