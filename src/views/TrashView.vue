<template>
  <Trash :trashData="$store.state.trashData" />
</template>

<script>
import Trash from '../components/Trash'
// import Trash from '../components/Trash.vue'
export default {
    name: 'TrashView',
    components: {
        Trash
    }

}
</script>

<style>

</style>