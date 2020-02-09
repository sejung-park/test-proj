<template>
  <div id="app">
    <header-structure></header-structure>
    <left-aside-structure></left-aside-structure>

    <right-aside-structure></right-aside-structure>
    <article-structure></article-structure>
    <footer-structure></footer-structure>
  </div>
</template>

<script lang="ts">
import Header from './components/structure/Header.vue'
import Article from './components/structure/Article.vue'
import Footer from './components/structure/Footer.vue'
import LeftAside from './components/structure/LeftAside.vue'
import RightAside from './components/structure/RightAside.vue'



export default {
  components: {
    'header-structure': Header,
    'article-structure': Article,
    'left-aside-structure': LeftAside,
    'right-aside-structure': RightAside,
    'footer-structure': Footer,
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
}


</style>
