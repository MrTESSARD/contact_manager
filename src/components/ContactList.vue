<template>
    <div>
        <contact-details 
        :contact='contact' 
        @deleteContact="deleteContact"  
        @updateContact="updateContact"  
        @saveEdit="saveEdit"  
        v-for='contact in contacts' :key='contact.id'>
        </contact-details>
        <ul>
            <li v-for="contact in contacts" :key="contact.id">
                {{ contact.data().firstName }} {{ contact.data().lastName }}
                <button @click="deleteContact(contact)">X</button>
            </li>

        </ul>

    </div>
</template>

<script>
import ContactDetails from './ContactDetails.vue'
export default {
    components: { ContactDetails },
    props: ['contacts'],
    methods: {
        deleteContact(contact) {
            this.$emit('deleteContact', contact)

        },
        saveEdit(editedContact) {
            console.log("editedContact",editedContact)
            this.$emit('saveEdit', editedContact)

        },

    },
}
</script>

<style  scoped>
li {
    list-style: none;
}
</style>