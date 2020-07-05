import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use

import Home from './components/Home.vue'
import FAQ from './components/FAQ.vue'

const routes=[
    {path:'/', name:'home', component:Home},
    {path:'/faq', name:'faq', component:FAQ},
]