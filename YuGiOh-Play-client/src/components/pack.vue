<script>
import { mapState, mapActions } from 'pinia';
import { useCardStore } from '../stores/card';

export default {
    props: ['card_packs'],
    methods: {
        ...mapActions(useCardStore, ["fetchRandomCard"]),
        onOpenPack(set_code){
            const response = {
                sets : set_code ? set_code : ""
            }
            
            this.fetchRandomCard(response)

            this.$router.push({
                path: '/result',
                query: {
                    set_code
                }
            })
        }
    },
    created() {
        this.fetchRandomCard({
            sets: this.$route.query.sets ? this.$route.query.sets : ""
        })
    }

}
</script>
<template>
    <div class="d-flex flex-column align-items-center">
        <img :src="card_packs.set_img" class="img-thumbnail" style="width: 300px; height: 270px;" alt="...">
        <p class="h5">
            {{card_packs.set_name}}
        </p>
        <button type="button" class="btn btn-outline-info" @click="onOpenPack(card_packs.set_code)">Open This</button>
    </div>
</template>