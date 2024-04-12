window.InputComponent = {
	name: 'InputComponent',
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
		<v-text-field
			v-model="name"
			:counter="10"
			:rules="nameRules"
			label="Text Input"
			required
		></v-text-field>
	`
};

