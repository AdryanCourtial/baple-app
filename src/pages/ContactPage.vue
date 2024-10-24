<template>
    <DefaultLayout> 
        <div class="container">
            <Map></Map>
            <div class="contact">
                <h1 class="text-[36px] font-bold w-full text-center"> Contact </h1>
                <p class="mt-4"> Téléphone : 06 99 20 26 79 </p>
                <p> Adresse : 2 Esplanade de la Gare, 33110 Le Bouscat </p>
                <p> email : contact@baple.fr </p>

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
    max-width: 500px;
    width: 100%;
    height: 200px;
    border-radius: 10px;
    border: solid 1px #FF851B
} 
</style>