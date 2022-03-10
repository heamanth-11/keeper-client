<template>
<div class="AddNote">
    <form >
    <input type="text" name="title" v-model="title" placeholder="Title" id="title"><br>
    <textarea id="body" v-model="body"  placeholder="Take a Note..."  rows="3"></textarea>
    <button @click="postNote(this)" type="button">+</button>
    </form>
</div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'AddNote',
  methods: {
      ...mapActions(['postNote'])
  }
  
}
</script>

<style scoped>
form input,
form textarea {
  width: 100%;
  border: none;
  padding: 4px;
  outline: none;
  font-size: 1.2em;
  font-family: inherit;
  resize: none;
  font-weight: 200;
  letter-spacing: 1.2px;
}
form {
  position: relative;
  width: 480px;
  font-family: inherit;
  margin: 30px auto 20px auto;
  background: #fff;
  padding: 15px;
  border-radius: 7px;
  box-shadow: 0 1px 5px rgb(138, 137, 137);
}
.AddNote{
    margin:auto;
    width:100%;
    height:100%;
   text-align: center;
   padding-top: 1rem;
   font-family: "Montserrat", sans-serif;
}
form button {
  position: absolute;
  right: 18px;
  bottom: -18px;
  background: #f5ba13;
  color: #fff;
  border: none;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  outline: none;
}
</style>