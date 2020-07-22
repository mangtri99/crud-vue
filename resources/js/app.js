/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

import VueRouter from 'vue-router';
Vue.use(VueRouter);

import VueAxios from 'vue-axios';
import axios from 'axios';

import App from './App.vue';
Vue.use(VueAxios, axios);

import ContactIndex from './components/ContactIndex.vue';
import ContactCreate from './components/ContactCreate.vue';
import ContactShow from './components/ContactShow.vue';
import ContactEdit from './components/ContactEdit.vue';

const routes = [
    {
        name: 'home',
        path: '/',
        component: ContactIndex
    },
    {
        name: 'create',
        path: '/contact/create',
        component: ContactCreate
    },
    // {
    //     name: 'show',
    //     path: '/contact/show/:id',
    //     component: ContactShow
    // },
    // {
    //     name: 'edit',
    //     path: '/contact/edit/:id',
    //     component: ContactEdit
    // }
]

const router = new VueRouter({ mode: 'history', routes: routes});
const app = new Vue(Vue.util.extend({ router }, App)).$mount('#app');
