export const bar_chart_page = async (req, res) => {
	try {
		res.render("bar-chart-page", {
			title: "Bar Chart",
			layout: "layouts/main",
			style: "bar-chart-style.css",
			script: "bar-chart-script.js",
			active: "bar-chart",
			propAggregate: "null",
			dataAggregate: "null",
		});
	} catch (error) {
		console.log(error);
	}
};
