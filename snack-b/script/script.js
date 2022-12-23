/***
Chiedere all'API 10 nomi da inserire in un array di invitati.
 Una volta generata la lista chiedere all'utente di dire il proprio nome.
 Se è uno degli invitati ritornare un messaggio di benvenuto, altrimenti di accesso negato.
*/
const { createApp } = Vue;

createApp({
    data() {
        return {
            arrayNums: [],
            inputNumber: null,
            somma: '',
            apiRandomIntegers: "https://flynn.boolean.careers/exercises/api/array/integers",
        }
    },

    // methods
methods: {
    getRandomArrayNumbers(numberOfItems) {
        axios.get(this.apiRandomIntegers, {
            params: {
                min: 1,
                max: 100,
                items: numberOfItems,
            }
        })
            // arrow function reference 'this' parent
            .then((response) => {
                const numbers = response.data.response;
                this.arrayNums.push(numbers)
                let sum = 0;
                numbers.forEach(element => {
                    sum += element;
                });
                this.somma = sum;
            });
    },
},


}).mount('#app')