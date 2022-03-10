<template>
     <footer>
      <p>Copyright ⓒ {{year}}</p>
    </footer>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Footer',
  props: {
    year: Number
  }
}
</script>

<style>
footer {
  display: flex;
  position:static;
  text-align: center;
  bottom: 0;
  width: 100%;
  /* height: 100%; */
  margin:2rem 0;
  align-items: baseline;
  justify-content: center;

}

footer p {
  color: #ccc;
}
</style>