import { isEmpty } from "../models/data-checking-query.js";
import { aggregate_data_query } from "../models/aggregate-query.js";

export const bar_chart_page = async (req, res) => {
	try {
		const check_model = await isEmpty();

		if (check_model.success && check_model.result) {
			res.redirect("/import-data");
		}

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