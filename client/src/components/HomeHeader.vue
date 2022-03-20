<template>
  <nav>
    <ul>
      <li><a href="/signup" id="signup">Sign up</a></li>
      <li><a href="/login"  id="login">Log in</a></li>
    </ul>
  </nav>

</template>

<script>
export default {
    name:'HomeHeader'
}
</script>

<style scoped>
nav{
  position: fixed;
  top:30px;
  right:50px;
}
/* 真好看 */
#back{
  border-radius: 36px;
  background: #2da56d;
}
#login{
  border-radius: 36px;
  background: #bfdd39;
}
#signup{
  border-radius: 36px;
  background: #415cd4;
}
#pic{
  float:top;
  width: 88px;
  margin: 0px 0px 0px -1350px;
}
</style>