<script>
import { RouterLink } from 'vue-router';
import pack from '../components/pack.vue'
import { mapState } from 'pinia'
import { useCardStore } from '../stores/card';
import navbar from '../components/navbar.vue';
export default {
    components: {
        pack,
        navbar
    },
    computed: {
        ...mapState(useCardStore, ["packs"])
    }
}
</script>

<template>

      <header class="p-3 text-bg-dark">
        <div class="container">
          <navbar />
        </div>
        <RouterLink to="/result">Go To Result</RouterLink>
      </header>

    <div class="album py-5 bg-light">
        <div class="row row-cols-1 row-cols-sm-3 row-cols-md-3 g-3">
            <pack v-for="(cardPacks, index) in packs" :key="index" :card_packs="cardPacks"/>
        </div>
    </div>
</template>