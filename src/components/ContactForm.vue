<template>
    <div>
        <h2>Créer un contact</h2>
<form @submit.prevent="createContact">

    <input type="test" placeholder="prénom" v-model="contact.firstName"><br>
    <input type="test" placeholder="nom" v-model="contact.lastName"><br>
    <input type="test" placeholder="email" v-model="contact.email"><br>
    <input type="test" placeholder="téléphone" v-model="contact.phone"><br>

<button type="submit">Créer</button>
</form>
    </div>
</template> 

<script>
import db from '../shared/db'
export default {
    data () {
        

        return {
            contact:{
                firstName:"",
                lastName:"",
                email:"",
                phone:"",

            }
        }
    },
    methods:{
        createContact(){
            console.log("createContact", this.contact)
            db.create(this.contact)
            .then((data)=>{
                console.log("data",data)
                this.$emit('created')
                this.resetForm()
            })
            .catch(error=>console.log(error))
        },
        resetForm(){
            this.contact.firstName=''
            this.contact.lastName=''
            this.contact.email=''
            this.contact.phone=''
        }
    }
}
</script>

<style 
scoped>
h2{
    color:red;
}

</style>
