<template>
    <DefaultLayout>
        <div class="container">
            <div class="card">
                <h2 class=" flex-1"> Pack <span class="text-primary_orange"> Découverte </span> </h2>
                <ul class="flex-1">
                    <li>- Possibilité de créer <strong class="color-change">1</strong> équipe </li>
                    <li>- <strong class="color-change"> 5 </strong> like autorisé par jours </li>
                    <li>- Equipe Limité à <strong class="color-change"> 15 </strong> joueurs </li>
                </ul>
                <p class="w-full text-center price"> Gratuit </p>
                <button class="button_pack"><CTA :first_text="'Découvrir'" :hover_text="'C\'est parti !'"></CTA></button>
            </div>
            <div class="card">
                <h2 class="flex-1" > Pack <span class="text-primary_orange"> Pro </span></h2>
                <ul class="flex-1" >
                    <li>- Possibilité de créer <strong class="color-change">4</strong> équipe </li>
                    <li>- <strong class="color-change"> 30 </strong> likes autorisé par jours </li>
                    <li>- <strong class="color-change">Pas de Limite</strong> de joueurs par équipes</li>
                </ul>
                <p class="w-full text-center price"> 9,90€/mois</p>
                <button class="button_pack"><CTA :first_text="'Découvrir'" :hover_text="'C\'est parti !'"></CTA></button>
            </div>
            <div class="card">
                <h2 class="flex-1"> Pack <span class="text-primary_orange"> Elite </span></h2>
                <ul class="flex-1">
                    <li>- <strong class="text-primary_orange"> Pas de Limite </strong> de création d'équipes </li>
                    <li>- <strong class="color-change">Pas de Limite</strong> de likes </li>
                    <li>- <strong class="color-change">Pas de Limite</strong> de joueurs par équipes </li>
                </ul>
                <p class="w-full text-center price"> 18,90€/mois </p>
                <button class="button_pack"><CTA :first_text="'Découvrir'" :hover_text="'C\'est parti !'"></CTA></button>
            </div>
        </div>
    </DefaultLayout>
</template>

<script lang="ts" setup>
import DefaultLayout from '../layouts/DefaultLayout.vue';
import CTA from '../components/CTA.vue';
</script>

<style scoped>
.container {
    padding-top: 80px;
    width: 100%;
    height: 100%;
    margin: auto;
    display: flex;
    flex-direction: row;
    gap: 40px;
    justify-content: center;
    align-items: center;
}

.card {
    min-height: 500px;
    min-width: 350px;
    height: auto;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    justify-content: space-between;
    border-radius: 10px;
    border: 1px double #FF851B;
    box-shadow: rgba(255, 255, 255, 0.35) 0px 5px 15px;
    background-color: transparent;
}

.button_pack {
    min-width: 50%;
    flex: 1;
}


.card h2 {
    text-align: center;
    font-weight: 600;
    font-size: 28px;
}

.color-change {
    color: #FF851B
}

.price {
    font-size: 28px;
    flex: 1;
}

</style>