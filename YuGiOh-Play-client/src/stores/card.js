import axios from 'axios';
import { defineStore } from 'pinia'

export const useCardStore = defineStore('useCardStore', {
    state: () => ({
        baseUrl: `http://localhost:3000/`,
        dataCards: []
    }),
    actions: {
        async fetchCard(response) {
            try {
                const { data } = await axios({
                    url: this.baseUrl + 'cards?',
                    method: 'get',
                    params: {
                        page: response.page ? response.page : 1,
                        fname: response.fname ? response.fname : "",
                        // race: response.race ? response.race : "",
                    }
                })
                console.log(data.data.length);
                this.dataCards = data.data
            } catch (error) {
                console.log(error);
            }
        }
    }
})
