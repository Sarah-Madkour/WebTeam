<template>
    <base-card>
        <h2>{{name}}</h2>
        <button :class="styleJob">{{job}}</button>
    </base-card>
</template>

<script>
import BaseCard from '../UI/BaseCard.vue'
    export default {
        name :'UserItem',
        components:{
            BaseCard
        },
        props:['name' , 'job'],
        computed:{
            styleJob(){
                return  'highlight job--'+this.job
            }
        }
        
    }
</script>
<style scoped>
.highlight{
    border: none;
    border-radius: 20px;
    padding: 0.7rem;
    color:#fff;
    margin-top: 1rem;
    width: 120px;
}
.job--Engineer{
    background-color: #055505;
}
.job--Consultant{
    background-color: #7b4343;
}
</style>