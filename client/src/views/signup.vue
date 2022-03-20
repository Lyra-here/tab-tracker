<template>
<div id="hi">
  <BackHeader></BackHeader>
<form>
    <h2>Sign up</h2>
    <label for="email">Email</label>
    <input for="text" name='email' v-model="email" required />
    <div class='email error'></div>
    <label for='password'>Password</label>
    <input type="password" name='password' v-model="password" required />
    <div class='password error'></div>
    <button @click="register">Sign up</button>
</form>
    <Footer></Footer>
</div>
</template>
<script>
import BackHeader from '@/components/BackHeader.vue'
import Footer from '@/components/Footer.vue'
import AuthenticationService from '../services/AuthenticationService'
export default {
  data(){
    return{
      email:'请输入email',
      password:'',
    }
  },
  methods:{
    async register(){
      const response = await AuthenticationService.register({
        email:this.email,
        password:this.password
      })
      console.log(response.data)
    }
  },
  name: 'signup',
  components: {
    BackHeader,
    Footer
  }
}
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
form{
  width: 360px;
  margin-top: 130px;
  padding: 30px;
  box-shadow: 1px 2px 3px rgba(0,0,0,0.1);
  border-radius: 10px;
  background: #fafafa;
}
label{
  text-align:left;
  display: block;
  margin: 20px 0 10px;
}
h2{
  margin-left:100px;
  text-align:left;
}
input{
  width: 340px;
  height:25px;
  padding: 10px 12px;
  border-radius: 4px;
  border: 1px solid #ddd;
  font-size: 0.8em;
  margin: auto;
}
img{
  width: 75px;
  margin-left: 0px;
  float:left;
}
form h2{
  margin: 0;
  padding: 0;
  font-family: 'Quicksand', sans-serif;
  color: #444;
}
form button{
  margin-top: 30px;
  border-radius: 36px;
  background: #FEE996;
  border:0;
  text-transform: uppercase;
  font-weight: 999;
  font-size: 1em;
  display: block;
  padding: 30px 130px;
  letter-spacing: 2px;
}
footer{
  text-align: center;
  margin-top: 100px;
  color: rgb(0, 0, 0);
}
</style>
