<script>
import { mapState, mapActions } from 'pinia';
import { useCardStore } from '../stores/card';
import navbar from '../components/navbar.vue';
import CardResult from '../components/cardResult.vue';

export default {
    components: {
        navbar,
        CardResult
    },
    computed: {
        ...mapState(useCardStore, ["dataRandom"])
    },


}
</script>

<template>

      <header class="p-3 text-bg-dark">
        <div class="container">
          <navbar />
        </div>

      </header>

    <div class="album py-5 bg-light">
        <div class="container">
            <div class="row row-cols-1 row-cols-sm-3 row-cols-md-5 g-5">
                <CardResult v-for="(random, index) in dataRandom" :key="index" :cardRandom="random"/>
            </div>
        </div>
    </div>
</template>