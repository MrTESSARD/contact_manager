<template>
    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">{{contact.data().firstName}} {{contact.data().firstName}}</h5>
            <h6 class="card-subtitle mb-2 text-body-secondary">{{contact.data().email}}</h6>
            <p class="card-text">Numéro de telephone : {{contact.data().phone}}</p>
            <a href="#" class="card-link">Card link</a>
            <a href="#" class="card-link">Another link</a>
        </div>
    </div>
</template>

<script>
export default {
    props:['contact']

}
</script>

<style lang="scss" scoped></style>