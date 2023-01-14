<template>
    <button>
        <slot></slot>
    </button>
</template>

<script>
    export default {
        name : 'BaseButton',
    }
</script>

<style scoped>
button {
    background-color: #a46322;
    padding: 1rem 2rem;
    color: #fff;
    text-transform: capitalize;
    width: 170px;
    margin-top: 1rem;
    cursor: pointer;
    border: none;
}
button:hover {
    background-color: #d6bc7b ;
}

</style>