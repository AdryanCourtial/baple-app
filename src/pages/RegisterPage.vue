<template>
    <DefaultLayout>
        <div class="w-full">
            <div class="container">
                <div class="panel">
                <h2 class="text-[36px] text-center font-bold w-full"> S'inscrire </h2>
                <div class="entry-input">
                        <label for=""> Nom </label>
                        <input type="text">
                </div>
                <div class="entry-input">
                    <label for=""> Prénom </label>
                    <input type="text">
                </div>
                <div class="entry-input">
                    <label for=""> Email</label>
                    <input type="text">
                </div>
                <div class="entry-input">
                    <label for=""> Mots de passe</label>
                    <input type="text">
                </div>
                <div class="entry-input">
                    <label for=""> Confirmation du Mots de passe</label>
                    <input type="text">
                </div>
                <div class="w-[50%] p-0 self-end">
                    <CTA first_text="S'inscrire" hover_text="Ready ?"></CTA>
                </div>
            </div>
        </div>
    </div>
    </DefaultLayout>
</template>

<script setup lang="ts">
import DefaultLayout from '../layouts/DefaultLayout.vue';
import CTA from '../components/CTA.vue';
</script>

<style scoped>

.container {
    margin: auto;
    width: 100%;
}

.panel {
    background-color: transparent;
    padding: 40px;
    max-width: 500px;
    width: 100%;
    justify-content: space-around;
    margin: auto;
    margin-top: 100px;
    border-radius: 10px;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    gap: 15px;
    border: 1px solid #FF851B;
    box-shadow: rgba(255, 255, 255, 0.35) 0px 5px 15px;
}

.entry-input {
   display: flex; 
   flex-direction: column;
}

.entry-input input{
    height: 40px;
    border-radius: 20px;
    color: black
}
</style>