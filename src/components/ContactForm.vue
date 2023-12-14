<template>
    <div>
        <h2>Créer un contact</h2>
<form>

    <input type="test" placeholder="prénom" v-model="contact.firstName"><br>
    <input type="test" placeholder="nom" v-model="contact.lastName"><br>
    <input type="test" placeholder="email" v-model="contact.email"><br>
    <input type="test" placeholder="téléphone" v-model="contact.phone"><br>

<button type="submit">Créer</button>
</form>
    </div>
</template>

<script>
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
    }
}
</script>

<style 
scoped>
h2{
    color:red;
}

</style>
