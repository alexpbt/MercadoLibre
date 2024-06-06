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

const parseItemData = (itemDetails, itemDescription) => {
	const author = {
		name: "Fabian",
		lastname: "Romero",
	};

	return {
		author,
		item: {
			id: itemDetails.id,
			title: itemDetails.title,
			price: {
				currency: itemDetails.currency_id,
				amount: 0,
				decimals: 0,
			},
			picture: itemDetails.pictures[0].secure_url,
			condition: itemDetails.condition,
			free_shipping: itemDetails.shipping.free_shipping,
			sold_quantity: itemDetails.available_quantity,
			description: itemDescription.plain_text,
		},
	};
};

export default getMeLiItemDetails;
