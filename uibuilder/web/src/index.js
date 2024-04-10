// @ts-nocheck
'use strict'

const { createApp } = Vue
const { createVuetify } = Vuetify
const vuetify = createVuetify({
    theme: {
    //   defaultTheme: 'light'
      defaultTheme: 'dark'
      
    }
})

// Using the Vue options API style for beginner simplicity
// No need to pre-define Quasar's $q when working with the options API
const app = createApp({
    // Define Vue reactive variables
    data() { return {

        count: 0,
        input1: '',
        items: [
            {
              name: 'African Elephant',
              species: 'Loxodonta africana',
              diet: 'Herbivore',
              habitat: 'Savanna, Forests',
            },
            {
              name: 'African Elephant',
              species: 'Loxodonta africana',
              diet: 'Herbivore',
              habitat: 'Savanna, Forests',
            },
            {
              name: 'African Elephant',
              species: 'Loxodonta africana',
              diet: 'Herbivore',
              habitat: 'Savanna, Forests',
            },
            {
              name: 'African Elephant',
              species: 'Loxodonta africana',
              diet: 'Herbivore',
              habitat: 'Savanna, Forests',
            },
            {
              name: 'African Elephant',
              species: 'Loxodonta africana',
              diet: 'Herbivore',
              habitat: 'Savanna, Forests',
            },
            // ... more items
          ]

    } },

    // Dynamic data
    computed: {},

    // Supporting functions
    methods: {

        // REALLY Simple method to return DOM events back to Node-RED.
        // doEvent: (event) => uibuilder.eventSend(event),
        doEvent: (count) => uibuilder.send({payload:JSON.stringify({count:count})}),

    },

    // Lifecycle hooks
    mounted() {
        // If msg changes - msg is updated when a standard msg is received from Node-RED
        uibuilder.onChange('msg', (msg) => {
            console.log('>> msg recvd >>', msg, this)
            // // If the msg.payload is a string, show in on the page
            // if (typeof msg.payload === 'string') this.message = msg.payload
            this.count = msg.payload.count
        })
    },
})

// app.mount('#app')
app.use(vuetify).mount('#app')