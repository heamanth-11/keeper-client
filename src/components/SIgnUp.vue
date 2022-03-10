<template>
   <div class="container">
  
  <div class="left">
    <h1>Sign Up</h1>
    <p>create a new account</p>
    
    <form>
      <label for="username" > Username</label>
      <input type="text" v-model="username" name="username" id="username" > 
      <label for="email">Email</label>
      <input type="email" v-model="email" name="name" id="email">
      
      <label for="password">Password</label>
      <input type="password" v-model="password1" name="password" id="password">
      
      <label for="confirm">Confirm Password</label>
      <input type="password" v-model="password2" name="confirm" id="confirm">
      
      <div class="accept">
        <input type="checkbox">
        <p>I agree to the <a href="/">terms of service</a></p>
      </div>
          
      <button class="button" @click="register(this)" type="button" value="Sign Up"> Signup</button>
    </form>
      
      
  </div>
  
  <div class="right">
    <img src="https://images.unsplash.com/photo-1581215524789-83361d941827?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80">
  </div>
  
</div> 
</template>
<script>
import { mapActions } from 'vuex'
export default {
   
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'SignUp',
  methods: {
    ...mapActions(['register'])}
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,900&display=swap');

* {
  font-family: 'Raleway', sans-serif;
}

body {
  height: 100vh;
  background-image: linear-gradient(130deg, #fefefe, #ededed);
  display: flex;
  justify-content: center;
  align-items: center;
}

.container {
  background-color: white;
  display: flex;
  width: 800px;
  border: 1px solid black;
  box-shadow: 8px 8px 0 0 black;
}

.left, .right {
  width: 400px;
}

.left {
  padding: 40px 60px;
}

form {
  display: flex;
  flex-direction: column;
}

.accept {
  display: flex;
  align-items: center;
  margin-top: 10px;
  font-size: 0.9rem;
}

.accept input {
  width: 15px;
  margin-right: 10px;
}

img {
  height: 500px;
  padding: 40px 60px;
}

.left h1 {
  margin-bottom: 10px;
}

label {
  margin: 15px 0 5px;
  font-size: 0.9rem;
}

.left p {
  margin-bottom: 15px;
}

input {
  height: 35px;
}

.accept p {
  margin: 0;
}

.button {
  width: 100%;
  height: 45px;
  background-color: black;
  color: white;
  font-size:1rem;
  margin-top: 30px;
}

</style>