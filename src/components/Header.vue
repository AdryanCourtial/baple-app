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
                    <RouterLink to=""> Tarifs </RouterLink>
                </div>
            </li>
            <li>
                <div class="button_header">
                    <RouterLink to="/"> <img src="./../../public/logo.png" alt="icon de l'application" class="h-auto m-auto"> </RouterLink>
                </div>
            </li>
            <li>
                <div class="button_header">
                    <RouterLink to=""> Contactez-nous ! </RouterLink>
                </div>
            </li>
            <li>
                <div class="button_header">
                    <RouterLink to=""> Téléchargement </RouterLink>
                </div>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
</script>

<style scoped lang="css">
.button_header {
    width: 100%;
    text-align: center
}
</style>