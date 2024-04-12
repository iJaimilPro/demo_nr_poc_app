window.ButtonComponent = {
	name: 'ButtonComponent',
	data() {
		return {
			count: 0,
			isVisible: true
		};
	},
	methods: {
		submitEvent: () => uibuilder.send({
			payload:JSON.stringify({
				text: "test1",
				color: "test1",
				date: "test1",
				range: "test1",
			})}
		),
	},
	template: `
		<v-btn 
			@click="submitEvent" 
			title="Not sent back to Node-RED - this just shows that VueJS is working"
			v-show="isVisible"
		>
			Send to Node-Red
		</v-btn>
	`
};
