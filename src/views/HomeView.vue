<template>
<AddNote/>
<Note :notes="$store.state.data"/>

</template>

<script>

import Note from '../components/Note.vue'
import AddNote from '@/components/AddNote.vue'
export default {
  name: 'HomeView',
  components: {
    Note,
    AddNote

  },
  
}
</script>
