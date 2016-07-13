import Vue from 'vue'
import Router from 'vue-router'
import App from './App'
import ModuleDetail from './components/moduleDetail.vue'
import ModuleItem from './components/moduleItem.vue'

Vue.use(Router)

var router = new Router()

router.map({
  '/modules/:id': {
    component: ModuleDetail
  },
  '/modules/:id/detail': {
    component: ModuleItem
  }
})

router.redirect({
  '*': '/modules/1'
})

/* eslint-disable no-new */
router.start(App, '#app')
