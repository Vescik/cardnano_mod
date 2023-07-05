import { createRouter, createWebHistory } from 'vue-router'
import MainPanelView from '../views/MainPanelView.vue'
import BenefitsPanelView from '../views/BenefitsPanelView.vue'
import SettingsPanelView from '../views/SettingsPanelView.vue'
import LoginView from '../views/LoginView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: LoginView
   },
   {
    path: '/stats',
    name: 'Stats',
    component: BenefitsPanelView
  },
  {
   path: '/settings',
   name: 'Settings',
   component: SettingsPanelView
  },
  {
   path: '/',
   name: 'AdminPanel',
   component: MainPanelView
  }
  ]
})

export default router
