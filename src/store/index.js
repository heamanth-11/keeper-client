import { createStore } from 'vuex'
import getApi from '../Api'
import axios from 'axios'
export default createStore({
  state: {
    data: [],
    trashData: [],
    token : '',
   
    
  },
  getters: {
    notes: (state) => state.data,
    trashData : (state) => state.trashData,
    token : (state)=> state.token
  },
  mutations: {
    populateNotes (state, notes) {
      console.log("working")
      state.data = notes
    },
    removeNote (state, id) {
    state.data = state.data.filter(todo => todo.id !== id)
    },
    addNote(state,note) {
    
     state.data.push(note)

    },
    updateNote(state,note) {
      let oldNote = state.data.findIndex(notes => notes.id == note.id )
      console.log(oldNote) 

    },
    populateTrashNotes (state, notes) {
      console.log("working")
      state.trashData = notes
    },
    restoreNote(state, id){
      state.trashData = state.trashData.filter(todo => todo.id !== id)

    },
    deleteTrashNote(state, id){
      state.trashData = state.trashData.filter(todo => todo.id !== id)

    },
    login(state, token){
      console.log(token)
      state.token = token
    }
  },
  actions: {
    async getNotes ({commit,state}) {
      console.log(state.token.key)
      if (state.token.key==null){
        alert('sign in to view data')
  
    }
    var config =  { headers: {
      Authorization : "token "+state.token
    }}
      await axios.get('http://localhost:8000/api/',config).then((response) => {
        console.log("api working",response.data)
        commit('populateNotes', response.data)})
    },
    async deleteNote ({commit,state},id) {
      console.log(id)
      let config =  { headers: {
        Authorization : "token "+state.token
      }}
      await axios.put('http://localhost:8000/deletenote',{id:id},config).then(() => {
       commit('removeNote', id) 
      })
    },
    async postNote({commit,state},newNote) {
      console.log(newNote,state.data,'here')
      let note = {title:newNote.title,body:newNote.body}
      if(state.data.length >  0) {
       let len = state.data.length 
       let lastId = state.data[len-1]
       console.log(lastId.id,len)
       note.id = Number(lastId.id )+ 1
 
      }
      else{
        note.id = 1
      }
      console.log(note)
      let config =  { headers: {
        Authorization : "token "+state.token
      }}
      axios.post('http://localhost:8000/addnote', note,config).then((response) => {
        console.log(response)
        commit('addNote',note)
    
      })

    },
    async updateNote({commit,state},updatednote) {
      // let note = {id:id, updatednote:updatednote} 
      console.log(updatednote)
     let config =  { headers: {
        Authorization : "token "+state.token
      }}
     await axios.put('http://localhost:8000/updatenote',updatednote,config).then((response) => { 
        console.log(response.data)
        commit('updateNote',updatednote)
       
      
      })
    },
    async getTrashNotes({commit,state}){
      let config =  { headers: {
        Authorization : "token "+state.token
      }}
      await axios.get('http://localhost:8000/trashnotes',config).then((response) => {
        console.log("api trash working",response.data)

        commit('populateTrashNotes', response.data)})
    },
    async restore({commit ,state},id){
      console.log(id)
      let config =  { headers: {
        Authorization : "token "+state.token
      }}
      await axios.put('http://localhost:8000/restore',{id:id},config).then((response) => { 
        console.log(response)
        commit('restoreNote',id)
        window.location.reload()
      
      })

    },
    async deleteTrash({commit,state},id){
      let config =  { headers: {
        Authorization : "token "+state.token
      }}
      await axios.put('http://localhost:8000/deletetrashnote',{'id':id},config).then(() => {
        commit('deleteTrashNote', id) 
       })
    },
    async login({commit},credentials){
      console.log(credentials)
      await getApi.post('rest-auth/login/',credentials).then((response)=>commit('login',response.data.key))
    },
    async register({dispatch},usercred){
      let reg = {username:usercred.username,email:usercred.email,password1:usercred.password1,password2:usercred.password1}
      let log =  {username:usercred.username,password:usercred.password1}
      console.log(reg)  
      try{
      await axios.post('http://localhost:8000/rest-auth/registration/',reg)
    }catch(err){
        console.log(err)
      }
      //  this.$router.push("/signin")
      console.log(log)
      setTimeout(() => {
        dispatch('login',log),5000
        })
       
   
    }
  },
  modules: {
  }
})
