<script>
import card from '../components/card.vue';
import { mapState, mapActions } from 'pinia';
import { useCardStore } from '../stores/card';
import navbar from '../components/navbar.vue';
import sort from '../components/sort.vue';
export default {
    components: {
        card,
        navbar,
        sort
    },
    data() {
        return {
            currentPage: 1
        }
    },
    methods: {
        ...mapActions(useCardStore, ["fetchCard"]),

        onClickHandler(page){
            const response = {
                page : page ? page * 7 : 0
            }
            
            this.fetchCard(response)

            this.$router.push({
                path: '/',
                query: {
                    page
                }
            })
        },
    },
    computed: {
        ...mapState(useCardStore, ["dataCards"])
    },
    created() {
        this.fetchCard({
            page: this.$route.query.page ? this.$route.query.page : 0
        })
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
    
    <div class="album py-5 bg-light">
        <div class="container">
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-2 g-3">
                <card v-for="(cards, index) in dataCards" :key="index" :dataCards="cards"/>
            </div>
            <vue-awesome-paginate
                :total-items="12389"
                :items-per-page="7"
                :max-pages-shown="7"
                v-model="currentPage"
                :on-click="onClickHandler"
            />
        </div>
    </div>

</template>

<style>
  ol, ul {
    list-style: none;
  }
  .pagination-container {
    display: flex;
    column-gap: 10px;
    justify-content: center;
    margin-top: 20px;
  }
  .paginate-buttons {
    height: 40px;
    width: 40px;
    border-radius: 20px;
    cursor: pointer;
    background-color: rgb(242, 242, 242);
    border: 1px solid rgb(217, 217, 217);
    color: black;
  }
  .paginate-buttons:hover {
    background-color: #d8d8d8;
  }
  .active-page {
    background-color: #3498db;
    border: 1px solid #3498db;
    color: white;
  }
  .active-page:hover {
    background-color: #2988c8;
  }
</style>