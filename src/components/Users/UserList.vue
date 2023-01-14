<template>
    <base-button class="btn" @click="confirm">Confirm</base-button>
    <ul>
        <user-item v-for="user in users"
        :key="user.id"
        :name="user.name"
        :job="user.job"></user-item>
    </ul>
</template>

<script>
import UserItem from './UserItem.vue';
    export default {
        name : 'UserList',
        components:{
            UserItem
        },
        inject:['users'],
        methods:{
            confirm(){
                //do something
                this.$router.push('/team')
            }
        }
    }
</script>

<style scoped>
.btn{
    margin: 0 1rem;
}
</style>