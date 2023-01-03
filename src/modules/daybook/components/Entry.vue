<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="entry-container mb-3 pointer p-2"
    @click="$router.push({name: 'entry', params: {id: 10}})">

      <!-- Title -->  
      <div class="entry-title d-flex">
        <span class="text-success fs-5 fw-bold">28</span>
        <span class="mx-1 fs-5">Diciembre</span>
        <span class="mx-2 fw-light">2022, Miercoles</span>
      </div>
      <div class="entry-description">
        Recrea los mejores momentos de tu dia, lleva el orden de tus mejores ideas, y
        haz que cada momento sea unico.

      </div>
    </div>
</template>
<script>

</script>

<style lang="scss" scoped>
.entry-container {
    border-bottom: 0px solid #2c3e50;
    transition: 0.2s all ease-in;

    &:hover {
        background-color: lighten($color: grey, $amount: 25);
        transition: 0.2s all ease-in;
    }

    .entry-description {
        font-size: 12px;
    }
}

</style>
