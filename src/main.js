import Vue from 'vue'
import Router from 'vue-router'
import App from './App'
import alerts from './components/alerts.vue'
import ModuleItem from './components/moduleItem.vue'
import picGame from './components/picGame.vue'

Vue.use(Router)

var router = new Router()

router.map({
  '/alerts': {
    component: alerts
  },
  '/pic/game': {
    component: picGame
  },
  '/modules/:id/detail': {
    component: ModuleItem
  }
})

router.redirect({
  '*': '/alerts'
})

/* eslint-disable no-new */
router.start(App, '#app')
