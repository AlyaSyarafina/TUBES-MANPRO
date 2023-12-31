
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

export const aggregate_data_bar = async (req, res) => {
	try {
		const { operator, colAggregate, colGroupBy } = req.body;

		const aggregateResult = await aggregate_data_query(
			operator,
			colAggregate,
			colGroupBy
		);

		const propAggregate = { operator, colAggregate, colGroupBy };

		if (aggregateResult.succcess) {
			res.render("bar-chart-page", {
				title: "Bar Chart",
				layout: "layouts/main",
				style: "bar-chart-style.css",
				script: "bar-chart-script.js",
				active: "bar-chart",
				propAggregate: JSON.stringify(propAggregate),
				dataAggregate: aggregateResult.result,
			});
		} else {
			res.send(aggregateResult.error);
		}
	} catch (error) {
		res.send(error);
	}
};
