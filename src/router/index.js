import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Dashboard from '../views/Dashboard.vue'
import EventInsight from '../views/EventInsight.vue'
import AboutEvent from '../views/AboutEvent.vue'
import ProductCheckout from '../views/ProductCheckout.vue'
import RegistrationForm from '../views/RegistrationForm.vue'
import Invoice from '../views/Invoice.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    component: Home,
    children: [
      {
        path: '/',
        component: Dashboard,
        name: 'Dashboard'
      },
      {
        path: '/event-insight',
        component: EventInsight,
        name: 'EventInsight'
      },
      {
        path: '/about-event',
        component: AboutEvent,
        name: 'AboutEvent'
      },
      {
        path: '/product-checkout',
        component: ProductCheckout,
        name: 'ProductCheckout'
      },
      {
        path: '/registration-form',
        component: RegistrationForm,
        name: 'RegistrationForm'
      },
      {
        path: '/invoice',
        component: Invoice,
        name: 'Invoice'
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: '/pwa',
  routes
})

export default router
