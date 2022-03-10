<template>
<Header/>
<!-- <Home/> -->
<router-view></router-view>
<Footer :year="2020" />
</template>
<script>
import Header from './components/Header'
// import getApi from './Api'
import Footer from './components/Footer'
export default {
  name: 'App',
  components: {
    Header,
    // Home,
    Footer
  }
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
}
body {
  background: #eee;
}
</style>