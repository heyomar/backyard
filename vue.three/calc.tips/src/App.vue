<template>
    <Calculator />
</template>

<script>
    import Calculator from "./components/Calculator.vue";

    export default {
      name: "App",
      components: {
        Calculator,
      },
    };
</script>

<style lang="scss">
    #app {
        font-family: monospace;
        font-size: 20px;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
        max-width: 450px;
        padding: 0 20px;
        margin: 40px auto;
    }
</style>
