<template>
  <section class='top-structure'>header</section>
</template>

<script>
export default {

}
</script>

<style scoped>
section.top-structure {
  position: fixed;
  top:0;
  left:0;
  background-color: aliceblue;
  display: block;
  height: 80px;
  width: 100%;
  /* smooth scrollbar 모듈사용시, 스크롤바가 헤더영역 아래에 생기는것 확인하고 추가함 */
  z-index: 1; 
}
</style>