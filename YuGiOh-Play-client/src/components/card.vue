<script>

export default {
    props: ['dataCards']
}

</script>
<template>
    
        <div class="col">
            <div class="card shadow-sm">
                <img :src="dataCards.card_images[0].image_url" alt="">
                <div class="card-body">
                    <p class="h5 card-text">
                        Card Sets: 
                    </p>
                    <p class="card-text">
                        {{ dataCards.card_sets[0].set_name }} ({{ dataCards.card_sets[0].set_rarity }}) 
                    </p>
                    
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                            <button type="button" class="btn btn-sm btn-outline-secondary">Buy</button>
                        </div>
                        <small class="h5 text-muted">Amazone Price: ${{ dataCards.card_prices[0].amazon_price }}</small>
                    </div>
                </div>
            </div>
        </div>
</template>