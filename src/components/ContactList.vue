<template>
    <div>
        <ul>
            <li v-for="contact in contacts" :key="contact.id">
  {{ contact.data().firstName }} {{ contact.data().lastName }}
</li>
            
        </ul>

    </div>
</template>

<script>
import db from '@/shared/db.js';
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
    }

}
</script>

<style  scoped>
li {
    list-style: none;
}
</style>