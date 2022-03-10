/* eslint-disable no-undef */
/* eslint-disable vue/no-unused-components */
/* eslint-disable vue/multi-word-component-names */
<template>
    <div class="notes">
    <div :key="note.id" v-for="note in  notes" className="note">
      <h1>{{ note.title }}</h1>
      <p>{{ note.note }}</p>
      <input type="text" name="updated-note" v-model="updatedNote">
      <span>
       <button class="button" type="button" @click="deleteNote(note.id)"><i class="fa-solid fa-trash"></i></button></span>
       <button class="update" type="button" @click="updateNote({id:note.id,body:updatedNote})"  ><i class="fa-solid fa-square-pen"></i></button>
    </div>
     </div>
</template>
   
<script>
import { mapGetters,mapActions,mapMutations  } from 'vuex'
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'note',
  methods: {
    ...mapActions(['getNotes','deleteNote','updateNote']),
    ...mapMutations(['removeNote'])
  },
  computed: mapGetters(['notes']),
    created() {
    this.getNotes();
  
  }
  
}

</script>

<style scoped>
.notes{
  margin: auto;
  margin: 0 3rem 0 0;
}
.note {
  background: #fff;
  border-radius: 7px;
  box-shadow: 0 2px 5px #ccc;
  padding: 10px;
  width: 15%;
  margin: 1rem;
  float: right;
  margin-right: 5rem;
}
.note h1 {
  font-size: 1.1em;
  margin-bottom: 6px;
}
.note p {
  font-size: 1.1em;
  margin-bottom: 10px;
  white-space: pre-wrap;
  word-wrap: break-word;
}
input{
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
.update{
  text-align: start;
  /* background:#f5ba13; */
  color:black;
  /* display:none; */
  color:#f5ba13;
  font-size: 1.5rem;
  width:100%;

}
.note button {
  float: right;
  margin-right: 10px;
  color: #f5ba13;
  border: none;
  width: 36px;
  height: 36px;
  cursor: pointer;
  text-align:center;
  outline: none;

}
.fa-trash{
  color: #f5ba13;
  font-size:1.5rem;
  border:none;
}
.fa-trash:hover{
  transform: scale(1.1);
  aspect-ratio: 1,2;
   transition: 0.1s;
}
</style>
