import Vue from 'vue'
import Router from 'vue-router'
import Menu from '../components/menu.vue'
import PressureReport from '../components/PressureReport.vue'
import User from '../components/user.vue'
import painAssessment from '../components/painAssessment.vue'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: '菜单',
      component: Menu,
      children: [
        {
          path: '/PressureReport',
          name: '压疮报告',
          component: PressureReport
        },
        {
          path: '/User',
          name: '我的',
          component: User
        },
        {
          path: '/painAssessment',
          name: '疼痛报告',
          component: painAssessment
        }
      ]
    }
  ]
})
