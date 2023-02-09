<script>
import { mapActions, mapState } from 'pinia';
import { useCardStore } from '../stores/card';

export default {

    data() {
        return {
            fname: "",
        }
    },

    methods: {
        ...mapActions(useCardStore, ['fetchCard']),

        searchSubmit() {
            const input = {
                fname: this.fname,
            };

            this.fetchCard(input);

            this.$router.push({
                path: "/",
                query: {
                    fname: this.fname ? this.fname : "",
                }
            });
        }

    }
}
</script>

<template>
    <div class="py-2 bg-secondary">
      <div class="container d-flex flex-wrap justify-content-evenly">
        <form class="col-lg-auto d-flex flex-row">
          
          <select name="fname" class="form-select" aria-label="Category">
            <option value="" selected disabled>-- Card Type --</option>
            <option value="normal">normal</option> 
            <option value="effect">effect</option> 
            <option value="ritual">ritual</option> 
            <option value="fusion">fusion</option> 
            <option value="synchro">synchro</option> 
            <option value="xyz">xyz</option> 
            <option value="link">link</option> 
            <option value="normal_pendulum">normal pendulum</option>
            <option value="effect_pendulum">effect pendulum</option> 
            <option value="ritual_pendulum">ritual pendulum</option> 
            <option value="fusion_pendulum">fusion pendulum</option> 
            <option value="synchro_pendulum">synchro pendulum</option> 
            <option value="xyz_pendulum">xyz pendulum</option> 
            <option value="spell">spell</option> 
            <option value="trap">trap</option> 
            <option value="token">token</option> 
            <option value="skill">skill</option>  
          </select>

          <button type="submit" class="btn btn-outline-light" @click="searchSubmit">Search</button>

        </form>
      </div>
    </div>
</template>