<template>
    <div>
        <ul class="list_button">
            <li>
                <div class="button_header">
                    <RouterLink to="/register"> S'inscrire </RouterLink>
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
                    <RouterLink to="/contact"> Nous Contacter </RouterLink>
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

.list_button {
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.list_button li {
    width: 100%;
    min-width: 75px;
}

@media only screen and (max-width: 750px){
    .list_button {
        flex-direction: column;
        gap: 10px;
    }
}

</style>