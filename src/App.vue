<template>
 <div id="app">
<Contact-form/>
<Contact-list/>

 </div>
</template>

<script>
import ContactForm from './components/ContactForm.vue'
import ContactList from './components/ContactList.vue';

export default {
  name: 'App',
  components: {
    ContactForm,
    ContactList
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
