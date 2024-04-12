window.RangeSliderComponent = {
	name: 'RangeSliderComponent',
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
		<v-range-slider
			label="Range (0-100):"
		>
		</v-range-slider>
	`
};

