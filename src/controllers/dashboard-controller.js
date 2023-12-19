export const dashboard_page = async (req, res) => {
	try {
		res.render("dashboard-page", {
			title: "Dashboard",
			layout: "layouts/main",
			style: "dashboard-style.css",
			script: "dashboard-script.js",
			active: "dashboard",
		});
	} catch (error) {
		console.log(error);
	}
};
