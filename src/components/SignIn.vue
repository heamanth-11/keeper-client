<template>
<body>
    <div class="login-page">
      <div class="login-container">
        <form class="login-form">
          <div class="username-info">
            <label for="username">
              <input id="username" name="username" type="text" v-model="username" placeholder="Username" required
              />
            </label>
          </div>
          <div class="password-info">
            <label for="password">
              <input
                id="password"
                type="text"
                name="password"
                v-model="password"
                placeholder="Password"
                required
              />
            </label>
          </div>
         <router-link to="/"><button type="button" @click="login(this)" class="login-btn">Login</button></router-link>  
          <a class="forgot-text" href="#">Forgot password?</a>
        </form>
      </div>

      <div class="sign-up-container">
        <div class="new-user">
          First time here? <a class="sign-up-text" href="#">Sign up</a>
        </div>
      </div>
    </div>
  </body>
</template>

<script>
import { mapActions } from 'vuex'
export default {
   
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Signin',
  methods: {
    ...mapActions(['login'])}
}

</script >

<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
  /* overflow-x: hidden; */
}

body {
  background-color: rgba(255, 255, 255, 0.523);
}

.login-page {
  width: 40rem;
  padding: 2rem;
  margin: auto;
}

.login-container {
  position: relative;
  font-size: 1.8rem;
  padding: 4rem;
  max-width: 36rem;
  display: flex;
  justify-content: center;
  margin-top: 4rem;
  margin-bottom: 4rem;
  border: solid 1px #333;
  background-color: #fff;
}

.username-info input,
.password-info input {
  display: block;
  font-size: 1.6rem;
  padding: 1rem 2rem 1rem 0.5rem;
  margin: 0 5rem 1.5rem 0;
  width: 100%;
  color: #444;
  background-color: #eee;
  border: solid 1px #aaa;
  border-radius: 5px; 
}

.login-btn {
  text-align: center;
  border: solid 1px #aaa;
  border-radius: 5px;
  padding: 1rem;
  margin-bottom: 1.5rem;
  background-color: #228be6;
  color: #fff;
  cursor: pointer;
}

.login-btn:hover {
  background-color: #4ea2eb;
}

.forgot-text {
  display: block;
  font-size: 1.4rem;
  text-align: center;
  color: #0e385c;
  text-decoration: none;
}

.forgot-text:hover {
  text-decoration: underline;
}

.sign-up-container {
  background-color: #fff;
  font-size: 1.8rem;
  display: flex;
  justify-content: center;
  border: solid 1px #333;
  padding: 2rem;
}

.sign-up-text {
  text-decoration: none;
  color: #228be6;
  font-weight: bold;
}

.sign-up-text:hover {
  text-decoration: underline;
}


</style>