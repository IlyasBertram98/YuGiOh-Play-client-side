<script>

export default {
    props: ["cardRandom"]
}
</script>
<template>
    <div class="col">
        <div class="card shadow-sm">
            <img :src="cardRandom.card_images[0].image_url" alt="">
            <div class="card-body">
                <p class="h5 card-text">
                    Price From: 
                </p>
                <p class="card-text">
                    Amazon price: {{ cardRandom.card_prices[0].amazon_price }}
                </p>
            </div>
        </div>
    </div>
</template>