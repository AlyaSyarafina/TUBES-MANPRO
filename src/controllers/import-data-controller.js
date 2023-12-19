export const import_data_page = async (req, res) => {
	try {
		res.render("import-data-page", {
			title: "Import Data",
			layout: "layouts/main",
			style: "import-data-style.css",
			script: "import-data-script.js",
			active: "import-data",
		});
	} catch (error) {
		console.log(error);
	}
};
