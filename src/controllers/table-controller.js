export const table_page = async (req, res) => {
	try {

		res.render("table-page", {
			title: "Table",
			layout: "layouts/main",
			style: "table-style.css",
			script: "table-script.js",
			active: "table",
			propAggregate: "null",
			dataAggregate: "null",
		});
	} catch (error) {
		console.log(error);
	}
};
