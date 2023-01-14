import { createApp } from 'vue'
import { createRouter } from 'vue-router'
import { createWebHistory } from 'vue-router'
import App from './App.vue'
import BaseCard from './components/UI/BaseCard.vue'
import BaseButton from './components/UI/BaseButton.vue'
import TeamList from './components/Teams/TeamList.vue'
import UserList from './components/Users/UserList.vue'
import TeamMember from './components/Teams/TeamMember.vue'
import NotFound from './components/Layouts/NotFound.vue'


const router = createRouter({
    history : createWebHistory(),
    routes:[
         {path : '/' , redirect : '/team'},
         {path : '/team' , component : TeamList }, //, alias : '/'
         {path : '/user' , component : UserList},
         {path : '/team/:teamId' , component : TeamMember , props : true},
         {path : '/:catchAll(.*)' , component : NotFound}

    ]
})

const app = createApp(App);

app.use(router);
app.component('base-card' , BaseCard)
app.component('base-button' , BaseButton)

app.mount('#app');
