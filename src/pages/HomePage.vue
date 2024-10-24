<template>
    <DefaultLayout>
        <div class="py-12">
            <div class="image-back p-10">
                <div>
                    <h1 class="text-[36px] font-bold content w-[50%]"> Trouvez des matchs amicaux en <span class="text-primary_orange"> <br> un clin d'œil</span> avec Baple </h1>
                    <p class="content w-[30%] mt-4">Vous cherchez à organiser un match amical ? Baple est là pour faciliter la rencontre entre équipes sportives, quels que soient le sport et le niveau. En quelques clics, trouvez vos futurs adversaires et planifiez vos rencontres.</p>
                </div>
            </div>
            <div class="container">
                <h2 class="text-[28px] font-bold text-media"> <span class="text-primary_orange">Pourquoi</span> choisir Baple ? </h2>
                <div class="container-faq">
                    <div class="faq">
                        <h3>Un système de matchmaking sportif :</h3>
                        <p class="text-faq"> À la manière de Tinder, Baple vous permet de swiper pour trouver des équipes prêtes à jouer, que ce soit pour le foot, le basket, ou tout autre sport</p>
                    </div>
                    <div class="faq">
                        <h3> Communication simplifiée : </h3>
                        <p class="text-faq"> Grâce à notre système de chat intégré, restez en contact direct avec vos adversaires pour organiser les détails du match.</p>
                    </div>
                    <div class="faq">
                        <h3>Gestion d’équipe améliorée :</h3>
                        <p class="text-faq">Planifiez, organisez et gérez vos matchs directement depuis notre application. Suivez vos rencontres passées et à venir en toute simplicité.</p>
                    </div>
                </div>
            </div>
            <div class="container">
                <h2 class="text-[28px] font-bold w-full text-center"> Prêt <span class="text-primary_orange">à vous lancer ? </span></h2>
                <p class="text-center mt-4">
                    Inscrivez-vous dès aujourd'hui pour découvrir toutes les fonctionnalités de Baple. Rejoignez notre communauté sportive et trouvez votre prochain adversaire en quelques minutes seulement !
                </p>
                <div class="w-[400px] mx-auto">
                    <CTA :first_text="'Télécharger l\'application'" :hover_text="'Commencer !'"></CTA>
                </div>
            </div>
        </div>
    </DefaultLayout>
</template>

<script setup lang="ts">
import DefaultLayout from '../layouts/DefaultLayout.vue';
import CTA from '../components/CTA.vue'
</script>

<style scoped>

.container {
    padding: 40px;
    width: 100%;
    margin: auto;
}

.image-back {
    display: flex;
    align-items: center;
    background-image: url('/sports-tools.webp');
    min-height: 600px;
    background-position: center;
    background-size: cover;
    position: relative;
    z-index: 10;
}

.content {
    z-index: 40;
    position: relative;
}

.image-back::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: #070B48;
    opacity: 60%;
    z-index: 11;
}

.container-faq {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 20px;
    margin: 50px 0;
}

.faq {
    min-height: 100px;
    width: 100%;
    max-width: 60%;
    margin: auto;
    border-radius: 10px;
    border: 1px double #FF851B;
    box-shadow: rgba(255, 255, 255, 0.35) 0px 5px 15px;
    padding: 10px;
    font-weight: 600;
}

.faq h3 {
    font-size: 20px;
}

.text-faq {
    padding-left: 20px;
    margin: 20px auto;
    font-weight: 400;
    font-size: 16px;
}

@media only screen and (max-width: 750px) {



    .content {
        width: 100%;
        margin: 10px;
    }

    .faq {
        max-width: 90%;
        justify-content: center;
        text-align: center;
        padding: 10px;
        margin: auto;
    }

}

</style>