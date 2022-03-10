/* eslint-disable vue/multi-word-component-names */
// eslint-disable-next-line vue/multi-word-component-names
<template>
   <div class="notes">
    <div :key="note.id" v-for="note in  trashData" className="note">
      <h1>{{ note.title }}</h1>
      <p>{{ note.note }}</p>
      <span>
       <button class="button" type="button" @click="deleteTrash(note.id)"><i class="fa-solid fa-trash"></i>  </button></span>
       <button class="update" type="button" @click="restore(note.id)"><i class="fa-solid fa-trash-arrow-up"></i></button>
    </div>
     </div>
</template>

<script>
import { mapGetters,mapActions} from 'vuex'
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Trash',
    methods: {
    ...mapActions(['getTrashNotes','restore','deleteTrash']),
  },
     computed: mapGetters(['trashData']),
    created() {
    this.getTrashNotes();
  }  

}
</script>

<style>
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
.fa-trash-arrow-up{
    color:#f5ba13;
    /* background-color: #f5ba13; */
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