import Vue from 'vue'
import Router from 'vue-router'
import Menu from '../components/menu.vue'
import login from '../components/login.vue'
import PressureReport from '../components/PressureReport.vue'
import painAssessment from '../components/painAssessment.vue'
import toHospital from '../components/toHospital.vue'
import Fall from '../components/Fall.vue'
import RiskCatheter from '../components/RiskCatheter.vue'
import Barthel from '../components/Barthel.vue'
import User from '../components/user.vue'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: '登陆',
      component: login
    },
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
          path: '/toHospital',
          name: '入院报告',
          component: toHospital
        },
        {
          path: '/Fall',
          name: 'Morse跌倒坠床评估',
          component: Fall
        },
        {
          path: '/RiskCatheter',
          name: '导管风险评估及干预',
          component: RiskCatheter
        },
        {
          path: '/Barthel',
          name: 'Barthel指数评定',
          component: Barthel
        },
        {
          path: '/painAssessment',
          name: '疼痛报告',
          component: painAssessment
        },
        {
          path: '/User',
          name: '我的',
          component: User
        }
      ]
    }
  ]
})
