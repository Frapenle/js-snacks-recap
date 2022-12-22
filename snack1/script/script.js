/**
Creare due div; uno conterrà numeri dispari di colore rosso e l'altro conterrà numeri pari in verde.
 Ad ogni click di un bottone chiedere all'API un numero, se è dispari metterlo nel blocco dispari, e se è pari in quello pari.
*/
const { createApp } = Vue;

createApp({
    data() {
        return {
            randomNumber: null,
            oddNumbers: [],
            evenNumbers: [],
        }
    },

    // methods
    methods: {
        getANumber() {
            axios.get('https://flynn.boolean.careers/exercises/api/random/int')
                // arrow function reference 'this' parent
                .then((response) => {
                    const result = response.data.response;
                    this.randomNumber = result
                        if (this.randomNumber % 2 === 0) {
                            this.evenNumbers.push(result)
                        } else {
                            this.oddNumbers.push(result)
                        }
                });
        },
    },
    //call function at every reload page
    created() {
    }

}).mount('#app')

