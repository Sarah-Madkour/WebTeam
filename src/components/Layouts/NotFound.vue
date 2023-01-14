<template>
    <base-card class="card">
        <p>This page is not found! Maybe view our<router-link to="/team">Teams</router-link></p>
    </base-card>
</template>

<script>
    export default {
        name : 'NotFound'
    }
</script>

<style scoped>
p{
    text-transform: uppercase;
    color: red;
    text-align: center;
    font-size: 40px;
}
.card{
    padding: 2rem;
}
a{
    color: #000;
    font-size: 40px;
}
</style>