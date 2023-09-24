import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Dashboard from '../views/Dashboard.vue'
import EventInsight from '../views/EventInsight.vue'
import AboutEvent from '../views/AboutEvent.vue'
import ProductCheckout from '../views/ProductCheckout.vue'
import RegistrationForm from '../views/RegistrationForm.vue'
import Invoice from '../views/Invoice.vue'
import Redirection from '../views/Redirection.vue'
import FunctionService from '../tools/FunctionService';
import eventService from '../service/event';

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
      },
      {
        path: '/:eventPublicId',
        component: Redirection,
        name: 'Redirection',
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: '/',
  routes
})

router.beforeEach(async (to, from, next) => {
  if (to.params.eventPublicId) {
    localStorage.setItem("from-permanent-link", "true")
    // localStorage.setItem('eventPublicId', to.params.eventPublicId + location.hash);

    const eventResponse = await eventService.getEventInsight(to.params.eventPublicId + location.hash);

    if (!FunctionService.isSuccessStatus(eventResponse.status)) {
      throw new Error(eventResponse.statusText);
    }

    const result = (eventResponse.data.events[0]);
    console.log('result', result);
    
    const bannerResponse = await eventService.getBannerByEventId(result.event_id)

    if (!FunctionService.isSuccessStatus(bannerResponse.status)) {
      throw new Error(bannerResponse.statusText);
    }
    
    const eventCompanyResponse = await eventService.getCompanyEvents(result.company_id)

    if (!FunctionService.isSuccessStatus(eventCompanyResponse.status)) {
      throw new Error(eventCompanyResponse.statusText);
    }

    result.banners = bannerResponse.data.products
    result.event_description = eventCompanyResponse.data.events.find(evt => evt.event_id === result.event_id).description;

    FunctionService.saveToLocalStorage("event", JSON.stringify(result));

    next('/event-insight');
  } else {
    next();
  }
});

export default router
