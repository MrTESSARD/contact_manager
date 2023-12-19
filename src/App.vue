<template>
  <div id="app">

    <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  
  
  <!-- Emmetre un evenement par emit de created -->
  <Contact-form @created="getAllContacts" />
  <Contact-list @deleteContact="deleteContact" @saveEdit="saveEdit" :contacts="contacts" />
  
  <router-view/>
  </div>
</template>
<!-- eslint-disable vue/no-unused-components -->

<script>
import ContactForm from './components/ContactForm.vue'// eslint-disable-line vue/no-unused-components
import ContactList from './components/ContactList.vue';// eslint-disable-line vue/no-unused-components
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
          this.contacts = snapshot.docs
        })
        .catch(error => {
          console.error(error)
        })
    },

    deleteContact(contact) {
      console.log("deleteContact")
      db.delete(contact.id)
        .then(() => {
          this.getAllContacts()
        })
        .catch(error => {
          console.error(error)
        })


    },
    saveEdit(editedContact) {
      console.log("editedContact")
      db.update(editedContact.id, editedContact) // Passer les nouvelles données de contact
        .then(() => {
          this.getAllContacts()
        })
        .catch(error => {
          console.error(error)
        })


    },
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
