<template>
    <div>
        <ul class="flex justify-around items-center [&>li]:w-full min-h-[75px]">
            <li>
                <div class="button_header">
                    <RouterLink to=""> à Propos </RouterLink>
                </div>
            </li>
            <li>
                <div class="button_header"> 
                    <RouterLink to="/tarifs"> Tarifs </RouterLink>
                </div>
            </li>
            <li>
                <div class="button_header">
                    <RouterLink to="/"> <img src="./../../public/logo.png" alt="icon de l'application" class="h-auto m-auto"> </RouterLink>
                </div>
            </li>
            <li>
                <div class="button_header">
                    <RouterLink to=""> S'inscrire </RouterLink>
                </div>
            </li>
            <li>
                <div class="button_header">
                    <RouterLink to=""><CTA first_text="Télégargement" hover_text="Start !"> </CTA></RouterLink>
                </div>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import CTA from './CTA.vue';
</script>

<style scoped lang="css">
.button_header {
    width: 100%;
    text-align: center;
    font-size: 14px;
    letter-spacing: 1px;
    font-weight: 600;
    text-transform: uppercase;
}
</style>