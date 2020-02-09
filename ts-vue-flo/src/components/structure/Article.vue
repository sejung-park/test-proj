<template>
  <section class='article-structure'>
    <section class='str-article-inner'>
      article start
      <nav-test></nav-test>
      article end
    </section>
  </section>
</template>

<script>
import NavTest from '../contents/NavTest.vue'
import Scrollbar from 'smooth-scrollbar';

export default {
  components: {
    'nav-test': NavTest,
  },
  mounted() {
    Scrollbar.init(document.querySelector('.str-article-inner'), {
      damping: 1
    });
  }
}
</script>

<style scoped>
/* Hide scrollbar for Chrome, Safari and Opera */
section.article-structure::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE and Edge */
section.article-structure {
  -ms-overflow-style: none;
}

section.article-structure {
  height: 100%;
  display: block;
  /* overflow: auto -> 컨텐츠 내부에 스크롤바가 생기도록 해줌*/
  /* overflow: auto; */
}

section.article-structure section.str-article-inner {
  /* height: auto;
  padding-top: 80px;
  padding-bottom: 80px;
  display: block; */
  position: absolute;
  overflow: auto;
  left: 80px;
  right: 80px;
  top: 80px;
  bottom: 80px;
}
</style>