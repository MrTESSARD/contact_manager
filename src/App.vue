<template>
 <div id="app">
<Contact-form/>
<Contact-list :contacts="contacts"/>

 </div>
</template>

<script>
import ContactForm from './components/ContactForm.vue'
import ContactList from './components/ContactList.vue';
import db from './shared/db';

export default {
  data() {
        return {
            contacts: []
        }
    },
    
  created() {
        this.getAllContacts()
    },
    methods: {
        getAllContacts() {
            db.read().
                then((snapshot) => {
                    console.log(snapshot)
                    this.contacts=snapshot.docs
                })
                .catch(error => {
                    console.error(error)
                })
        }
    },

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
