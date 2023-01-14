<template>
  <div>
    <the-header>
        <router-link to="/team">Teams</router-link>
        <router-link to="/user">Users</router-link>
    </the-header>
      <router-view v-slot="slotProps">
        <transition name="route">
          <component :is="slotProps.Component" ></component>
        </transition>
      </router-view>
  </div>
</template>

<script>
import TheHeader from './components/Layouts/TheHeader.vue';


export default {
  name: 'App',
  components: {
    TheHeader,
  },
  data(){
    return{
      activeCom : 'team-list',
      teams:[
            {
                id : 't1',
                job : 'Frontend Engineer',
                members : ['u1' , 'u2']
            },
            {
                id : 't2',
                job : 'Backend Engineer',
                members : ['u1' , 'u2' , 'u3']
            },
            {
                id : 't3',
                job : 'Client Consulting',
                members : ['u4' , 'u5']
            },
        ],
        users:[
            {
                id : 'u1',
                name : 'Leila Adams',
                job : 'Engineer'
            },
            {
                id : 'u2',
                name : 'Julie Jones',
                job : 'Engineer'
            },
            {
                id : 'u3',
                name : 'Ranveer Kumar',
                job : 'Engineer'
            },
            {
                id : 'u4',
                name : 'Alex Smith',
                job : 'Consultant'
            },
            {
                id : 'u5',
                name : 'Max William',
                job : 'Consultant'
            },
        ]
    }
  },
  provide(){
    return{
      teams:this.teams,
      users:this.users
    }
  },
  methods:{
    ChangeCom(com){
      this.activeCom = com
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
a{
  background: none;
  color: #fff;
  border: none;
  text-transform: capitalize;
  padding: 0.7rem;
  font-size: 20px;
  margin-right: 20px;
  text-decoration: none;
}
a:hover,
a:active,
a.router-link-active{
  color: #c2b154;
  font-size: 20px;
  cursor: pointer;
  border:1px solid #c2b154 ;
}


.route-enter-from,
.route-leave-to{
    opacity: 0;
}

.route-enter-active{
    transition: opacity 0.5s ease-out;
}

.route-enter-active{
    transition: opacity 0.5s ease-in;
}
.route-enter-to,
.route-leave-from{
    opacity: 1;
}

.v-enter-from,
.v-leave-to{
    opacity: 0;
}

.v-enter-active{
    transition: opacity 0.5s ease-out;
}

.v-enter-active{
    transition: opacity 0.5s ease-in;
}
.v-enter-to,
.v-leave-from{
    opacity: 1;
}
</style>
