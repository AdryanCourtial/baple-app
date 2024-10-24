import ContactPage from './pages/ContactPage.vue'
import HomePage from './pages/HomePage.vue'
import PricingPage from './pages/PricingPage.vue'
import RegisterPage from './pages/RegisterPage.vue'

const routes = [
    { path: '/', component: HomePage },
    { path: '/tarifs', component: PricingPage },
    { path: '/register', component: RegisterPage },
    { path: '/contact', component: ContactPage },


]

export {
    routes
}