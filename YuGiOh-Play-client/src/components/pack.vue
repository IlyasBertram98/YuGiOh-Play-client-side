<script>

export default {
    props: ['card_packs']
}
</script>
<template>
    <div class="d-flex flex-column align-items-center">
        <img :src="card_packs.set_img" class="img-thumbnail" style="width: 300px; height: 270px;" alt="...">
        <p class="h5">
            {{card_packs.set_name}}
        </p>
        <button type="button" class="btn btn-outline-info">Open This</button>
    </div>
</template>