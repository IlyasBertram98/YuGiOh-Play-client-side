import axios from 'axios';
import { defineStore } from 'pinia'

export const useCardStore = defineStore('useCardStore', {
    state: () => ({
        baseUrl: `http://localhost:3000/`,
        dataCards: [],
        packs: [{
            set_name: 'Breakers of Shadow',
            set_code: 'BOSH',
            set_img: 'https://i.pinimg.com/originals/19/a1/08/19a10870acee56889dbbc5cef70427f7.jpg'
        },
        {
            set_name: 'Chaos Impact',
            set_code: 'CHIM',
            set_img: 'https://www.hopstop.bg/media/t27s4/6525.jpg'

        },
        {
            set_name: 'Circuit Break',
            set_code: 'CIBR',
            set_img: 'https://i5.walmartimages.com/asr/69259d40-04e0-43b1-b5fb-883091b6217b_1.7be0b798dac1df8ed19af7e271194618.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff'

        },
        {
            set_name: 'Clash of Rebellions',
            set_code: 'CORE',
            set_img: 'https://product.hstatic.net/1000231532/product/y33_-_clash_of_rebellions__tcg__36521c083b7048e59f87cb416f3bcc4a_master.jpg'

        },
        {
            set_name: 'Code of the Duelist',
            set_code: 'COTD',
            set_img: 'https://dacardworld3.imgix.net/495829.jpg?auto=format%2Ccompress&fm=jpg&h=1800&ixlib=php-1.2.1&w=1800&s=8dddc3583b6a143228d9362fb35db8e2'

        }]
    }),
    actions: {
        async fetchCard(response) {
            try {
                const { data } = await axios({
                    url: this.baseUrl + 'cards?',
                    method: 'get',
                    params: {
                        page: response.page ? response.page : 0,
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
