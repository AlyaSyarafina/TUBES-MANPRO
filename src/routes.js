import express from "express";

import { import_data_page } from "./controllers/import-data-controller.js";
import { table_page } from "./controllers/table-controller.js";
import { bar_chart_page } from "./controllers/bar-chart-controller.js";
import { scatter_plot_page } from "./controllers/scatter-plot-controller.js";
import { dashboard_page } from "./controllers/dashboard-controller.js";

const router = express.Router();

// Get route
router.get("/", dashboard_page);
router.get("/import-data", import_data_page);
router.get("/dashboard", dashboard_page);
router.get("/table", table_page);
router.get("/bar-chart", bar_chart_page);
router.get("/scatter-plot", scatter_plot_page);

export default router;
