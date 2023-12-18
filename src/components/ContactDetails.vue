<template>
    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">{{contact.data().firstName}} {{contact.data().lastName}}</h5>
            <h6 class="card-subtitle mb-2 text-body-secondary">{{contact.data().email}}</h6>
            <p class="card-text">Numéro de telephone : {{contact.data().phone}}</p>
           
            <button class="btn btn-sm btn-warning" @click="updateContact(contact)" >Modifier</button>
            <button class="btn btn-sm btn-danger" @click="deleteContact(contact)" >Delete</button>
            
        </div>
    </div>

    <div v-if="isInEditMode" class="card" style="width: 18rem;margin-bottom: 10px;">
    <div class="card-body">
      <input type="text" v-model="contactCopy.firstName"><br>
      <input type="text" v-model="contactCopy.lastName"><br>
      <input type="text" v-model="contactCopy.email"><br>
      <input type="text" v-model="contactCopy.phone"><br>

      <h5 class="card-title">{{contact.data().lastName}} {{contact.data().firstName}}</h5>
      <h6 class="card-subtitle mb-2 text-muted">{{contact.data().email}}</h6>
      <p class="card-text">numéro de téléphone : {{contact.data().phone}}</p>
      <button
        class="btn btn-sm btn-success"
        @click="saveEdit">
        modifier
      </button>
      <button
        class="btn btn-sm btn-warning"
        @click="cancelEdit">
        annuler
      </button>
    </div>
  </div>

</template>

<script>
export default {
    props:['contact'],
    data() {
        return {
            isInEditMode: false,
            contactCopy: {},

        }
    },
    methods: {
        editContact() {
      const { firstName, lastName, phone, email } = this.contact.data();
      this.contactCopy = {
        id: this.contact.id,
        firstName,
        lastName,
        phone,
        email,
      };
      this.isInEditMode = true;
    },
        deleteContact(contact) {
            this.$emit('deleteContact', contact)
    
        },
        updateContact(contact) {
            this.$emit('updateContact', contact)
    
        },
    }


}
</script>

<style lang="scss" scoped></style>