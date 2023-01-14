<template>
    <header>
        <slot></slot>
    </header>
</template>

<script>
    export default {
        name : 'TheHeader'
    }
</script>

<style scoped>
header{
    background-color: #314819;
    padding: 2rem;
    width:100%;
    height: 90px;
    margin-bottom: 2rem;
    text-align: center;
}

</style>