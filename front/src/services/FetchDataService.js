async function fetchData(fetchUrl) {
	try {
		const result = await fetch(fetchUrl);
		const data = await result.json();

		return data;
	} catch (e) {
		return "Couldn't retrieve data, please try again later.";
	}
}

export { fetchData };
