window.ColorPickerComponent = {
	name: 'ColorPickerComponent',
	data() {
		return {
			count: 0,
			isVisible: true
		};
	},
	methods: {
		incrementCount() {
			this.count++;
		}
	},
	template: `
		<v-color-picker hide-canvas></v-color-picker>
	`
};

