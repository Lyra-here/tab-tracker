<template>
  <div id="hi">
    <HomeHeader></HomeHeader>
    <h1>欢迎使用图书管理系统</h1>
    <Footer></Footer>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeHeader from "@/components/HomeHeader.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "Home",
  components: { 
    HomeHeader, 
    Footer 
  },
};
</script>

<style scoped>
#hi {
  position: fixed;

  top: 0;

  left: 0;

  width: 100%;

  height: 100%;

  min-width: 1000px;

  z-index: -10;

  zoom: 1;

  background-color: #fff;

  background-repeat: no-repeat;

  background-size: cover;

  -webkit-background-size: cover;

  -o-background-size: cover;

  background-position: center 0;
}
h1{
  padding: 0;
  font-family: 'Quicksand', sans-serif;
  font-size:24mm;
  color: rgb(31, 132, 226);
  margin-top:200px;
}
footer{
    margin-top:370px;
    color:black
  }
</style>