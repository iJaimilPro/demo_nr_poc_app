// @ts-nocheck
'use strict'

const { createApp } = Vue
const { createVuetify } = Vuetify

const vuetify = createVuetify({
	theme: {
		// defaultTheme: 'light'
		defaultTheme: 'dark'
	}
})

const app = createApp({
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
		],
		displayBtnByInjection: false,
		text_input:"",
		color:"",
		showPicker: false,
		selectedDate: null,
		selectedRange: 0
	} },

	// Dynamic data
	computed: {},

	// Supporting functions
	methods: {
		// REALLY Simple method to return DOM events back to Node-RED.
		// submitEvent: (event) => uibuilder.eventSend(event),
		doEvent: (count) => uibuilder.send({payload:JSON.stringify({count:count})}),
		incrementCount() {
			this.count++;
		},
		handleTextInputChange(event) {
			this.text_input = event.target.value;
		},
    handleColorChange(event) {
			this.color = event.target.value
		},
		// handleDateChange(newDate) {
		// 	this.selectedDate = newDate
		// 	console.log("selectedDate", this.selectedDate)
		// },
		submitEvent: (text, color, range) => {
			uibuilder.send({
				payload:JSON.stringify({
					text: text,
					color: color,
					range: range,
				})}
			)
		},
	},

	// Lifecycle hooks
	mounted() {
		// If msg changes - msg is updated when a standard msg is received from Node-RED
		uibuilder.onChange('msg', (msg) => {
			console.log('>> msg recvd >>', msg, this)
			// // If the msg.payload is a string, show in on the page
			console.log("", msg.payload)
			this.displayBtnByInjection = !this.displayBtnByInjection;
			if (msg.payload.count) {
				this.count = msg.payload.count
			}
		})
	},
})

app.component('app-input', window.InputComponent)
app.component('app-color-picker', window.ColorPickerComponent)
app.component('app-date-picker', window.DatePickerComponent)
app.component('app-range-slider', window.RangeSliderComponent)
app.component('app-btn', window.ButtonComponent)

app.use(vuetify).mount('#app')