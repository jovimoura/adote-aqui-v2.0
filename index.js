import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.esm.browser.js';

let app =  new Vue({
    el:'#app',
    vuetify: new Vuetify(),
    data() {
        return {
            listaPets: [
                {
                    id:0,
                    name:'Tadeu',
                    src:'./assets/pets/Cachorro2.jpg',
                    alt:'exeplo'
                },
                {
                    id:1,
                    name:'Safira',
                    src:'./assets/pets/Cachorro3.jpg',
                    alt:'exemplo'
                },
                {
                    id:2,
                    name:'Asuna',
                    src:'./assets/pets/Cachorro4.jpg',
                    alt:'exemplo'
                },
                {
                    id:3,
                    name:'Pudim',
                    src:'./assets/pets/Gato1.jpg',
                    alt:'exemplo'
                },
                {
                    id:4,
                    name:'Melissa',
                    src:'./assets/pets/Gato2.jpg',
                    alt:'exemplo'
                },
                {
                    id:5,
                    name:'Elvis',
                    src:'./assets/pets/Gato3.jpg',
                    alt:'exemplo'
                }
            ]
        }
    },
})