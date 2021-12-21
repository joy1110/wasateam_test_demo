<template>
    <metainfo>
        <template v-slot:title="{ content }">{{ content ? `${content} | WasaTeam TestDemo` : `WasaTeam TestDemo` }}</template>
    </metainfo>

    <router-view />
</template>

<script>
import { useMeta } from 'vue-meta';

export default {
    setup () {
        useMeta({
            title: '首頁',
            htmlAttrs: { lang: 'zh-TW'}
        })
    }
}
</script>

<style lang="scss">
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

	#nav {
        padding: 30px;

        a {
            font-weight: bold;
            color: #2c3e50;

            &.router-link-exact-active {
            color: #42b983;
            }
        }
        }
</style>
