<template>
    <base-card>
        <h2>{{job}}</h2>
        <h3>{{members.length}} members</h3>
        <router-link :to='teamMembersLink'>View Members</router-link>
    </base-card>
</template>

<script>

import BaseCard from '../UI/BaseCard.vue'
    export default {
        components: { BaseCard },
        name : 'TeamItem',
        props:['id' ,'job' , 'members'],
        computed:{
            teamMembersLink(){
                return ('/team/' + this.id)
            }
        }
        
    }
</script>

<style scoped>
h3{
    margin-top: 1rem ;
}
a{
    background-color: #a46322;
    display: block;
    padding: 0.5rem 1rem;
    color: #fff;
    text-transform: capitalize;
    width: 170px;
    margin-top: 1rem;
    cursor: pointer;
    border: none;
}

</style>