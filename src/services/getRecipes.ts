export const getRecipes = async () => {
	const options = {
		method: "GET",
		headers: {
			"X-RapidAPI-Key": "d5fdb4959dmshaeddea588091684p1b937ajsn94dfd8e4de83",
			"X-RapidAPI-Host": "tasty.p.rapidapi.com"
		}
	};
	return fetch(
		"https://tasty.p.rapidapi.com/recipes/list?from=0&size=5&tags=under_30_minutes",
		options
	)
		.then((response) => response.json())
		.then((data) => {
			return data;
		})
		.catch(() => {
			console.log("error");
		});
};
