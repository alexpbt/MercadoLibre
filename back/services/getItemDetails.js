import axios from "axios";

const getMeLiItemDetails = async (id) => {
	const [itemDetailsResponse, itemDescriptionResponse] = await Promise.all([
		axios.get(`https://api.mercadolibre.com/items/${id}`),
		axios.get(`https://api.mercadolibre.com/items/${id}/description`),
	])
		.catch(function (error) {
			// manejar error
			console.log(error);
		})
		.finally(function () {
			// siempre sera executado
		});

	console.log(
		parseItemData(itemDetailsResponse.data, itemDescriptionResponse.data)
	);

	return parseItemData(itemDetailsResponse.data, itemDescriptionResponse.data);
};

const parseItemData = (item, itemDescription) => {
	const author = {
		name: "Fabian",
		lastname: "Romero",
	};

	return {
		author,
		item: {
			id: item.id,
			title: item.title,
			price: {
				currency: item.currency_id,
				amount: item.price,
				decimals: 0,
			},
			picture: item.pictures[0].secure_url,
			condition: item.condition,
			free_shipping: item.shipping.free_shipping,
			sold_quantity: item.available_quantity,
			description: itemDescription.plain_text,
		},
	};
};

export default getMeLiItemDetails;
