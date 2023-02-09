<script>
import { RouterLink, RouterView } from 'vue-router'
import navbar from './components/navbar.vue';
import sort from './components/sort.vue';
export default {
  components: {
    navbar,
    sort
  }
}

</script>

<template>
      <header class="p-3 text-bg-dark">
        <div class="container">
          <navbar />
        </div>

      </header>

    <!-- end of navbar -->
    <sort />

  <RouterView />
</template>

<style scoped>

</style>
