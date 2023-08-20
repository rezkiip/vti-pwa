import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Dashboard from '../views/Dashboard.vue'
import EventInsight from '../views/EventInsight.vue'
import AboutEvent from '../views/AboutEvent.vue'
import ProductCheckout from '../views/ProductCheckout.vue'

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
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
