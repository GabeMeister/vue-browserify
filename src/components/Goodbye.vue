<template>
    <div id="goodbye">
        <h1>{{ msg }}</h1>
        <router-link to="/">Go back to Landing Page</router-link>
    </div>
</template>

<script>
    export default {
        name: 'goodbye',
        data() {
            return {
                msg: 'Good Bye'
            }
        }
    };
</script>

<style scoped>
    #goodbye {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }

    h1,
    h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
