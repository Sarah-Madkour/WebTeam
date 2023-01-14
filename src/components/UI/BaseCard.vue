<template>
    <div>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name : 'BaseCard'
    }
</script>

<style scoped>
div{
    width: 600px;
    min-height: 100px;
    box-shadow: 2px 4px 12px rgba(0,0,0,0.25);
    padding: 1.5rem;
    border-radius: 20px;
    margin: 30px auto;
}
</style>