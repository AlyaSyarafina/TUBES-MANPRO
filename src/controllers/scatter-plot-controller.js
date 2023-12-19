export const scatter_plot_page = async (req, res) => {
	try {
		res.render("scatter-plot-page", {
			title: "Scatter Plot",
			layout: "layouts/main",
			style: "scatter-plot-style.css",
			script: "scatter-plot-script.js",
			active: "scatter-plot",
			propAggregate: "null",
			dataAggregate: "null",
		});
	} catch (error) {
		console.log(error);
	}
};
