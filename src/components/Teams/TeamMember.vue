<template>
        <base-button @click="confirm" class="btn">Back to list</base-button>
        <base-card>
        <!--<h1>{{teamName}}</h1>-->  
        <ul>
            <user-item class="base"
            v-for="member in members"
            :key="member"
            :name='member.name'
            :job="member.job"></user-item>
        </ul>
        <router-link to="/team/t2">Go to team 2</router-link>
    </base-card>
</template>

<script>
import BaseButton from '../UI/BaseButton.vue';
import UserItem from '../Users/UserItem.vue';
    export default {
        components:{
            UserItem,
            BaseButton
        },
        name : 'TeamMember',
        data(){
            return{
                teamName : '',
                members : []
            }
        },
        inject:['teams' , 'users'],
        props:['teamId'],
        methods:{
            confirm(){
                this.$router.push('/team')
            },
            loadTeam(teamId){
                //const teamId = this.$route.params.teamId;
                const selectedTeam = this.teams.find(team=> team.id === teamId);
                const members = selectedTeam.members;
                const selectedMembers = [];
                for (const member of members){
                    const selectedUser = this.users.find((user)=> user.id === member); 
                    selectedMembers.push(selectedUser)
                }
                this.teamName=selectedTeam;
                this.members=selectedMembers;
                }
        },
        created(){
            //this.$route.path  //   team/t1
            this.loadTeam(this.teamId);
        },
        watch:{
            teamId(newId){
                this.loadTeam(newId)
            }
        }
        
    }
</script>

<style scoped>
.base{
    width:100%;
}
.btn{
    margin: 0 1rem;

}
a{
    color: #a46322;
}
</style>