<template>
    <ul>
        <team-item v-for="team in teams"
            :key="team.id"
            :id="team.id"
            :job="team.job"
            :members="team.members">
        </team-item>
    </ul>
</template>

<script>
import TeamItem from './TeamItem.vue';
    export default {
        name : 'TeamList',
        components:{
            TeamItem
        },
        inject:['teams']
        
    }
</script>

<style scoped>

</style>