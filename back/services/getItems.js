import axios from "axios";

const getMeLiItems = async (query, limit) => {
	try {
		const response = await axios.get(
			`https://api.mercadolibre.com/sites/MLA/search?q=${query}&limit=${limit}`
		);

		return parseItemsData(response.data);
	} catch (error) {
		console.error(error);
	}
};

const parseItemsData = (itemsData) => {
	const author = {
		name: "Fabian",
		lastname: "Romero",
	};

	return {
		author,
		categories: getItemCategories(
			itemsData.filters[0]?.values[0]?.path_from_root
		),
		items: getItems(itemsData.results),
	};
};

const getItems = (items) => {
	return items.map((item) => {
		return {
			id: item.id,
			title: item.title,
			price: {
				currency: item.currency_id,
				amount: item.price,
				decimals: 0,
			},
			picture: item.thumbnail,
			condition: item.condition,
			free_shipping: item.shipping.free_shipping,
		};
	});
};

const getItemCategories = (itemCategories) => {
	if (!itemCategories) return;

	return itemCategories.map((a) => a.name);
};

export default getMeLiItems;
