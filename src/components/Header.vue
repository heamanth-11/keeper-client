/* eslint-disable vue/no-parsing-error */

<template>
    <header>
        <div class="header">
<img src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png" alt=""><span>Keeper</span>
        
        <div class="nav-items">
            <ul>
                 
                 <router-link class="li" to="/"> Home </router-link> 
                 <router-link class="li" to="/about"> About </router-link> 
                 <router-link class="li" to="/trash">Trash </router-link> 
                 <router-link class="li" to="/signin"> login </router-link>
                 <router-link class="li" to="/signup"> Signup </router-link>
            </ul>

       </div> 
        </div>
    </header>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Header'
}
</script>
<style scoped>
header{
    background: #f5ba13;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
    font-family: "McLaren", cursive;
     padding:1rem 0;
    width:100%;
    /* display:flex; */
    /* justify-content: space-between; */
}
header img{
height: 100%;
padding: 0  0 0 2%;
}
.header{
    margin: auto;
    /* display:inline-block */
}
header span{
    font-size:1.5rem;
    display:inline-block;
    align-items:center;
    font-size: 2rem;
    font-weight:400;
    position: relative;
    bottom: 0.5rem;
    color:white;
}
.nav-items{
    display:inline-block;
    padding: 1rem 15rem;
   
   

}
.nav-items ul{

margin:0;
padding:0 10rem ;
display: flex;
justify-content:end;
 width:100%;
}
.nav-items ul .li{
    padding : 0 2rem;
    list-style-type:none;
    color:white;
    align-items: flex-end;
    text-decoration: none;
}
</style>