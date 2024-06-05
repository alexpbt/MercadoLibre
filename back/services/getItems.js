import axios from "axios";

const getMeLiItems = async (query) => {
  const response = await axios
    .get(`https://api.mercadolibre.com/sites/MLA/search?q=${query}&limit=4`)
    .catch(function (error) {
      // manejar error
      console.log(error);
    })
    .finally(function () {
      // siempre sera executado
    });

  console.log(parseItemsData(response.data));
  return parseItemsData(response.data);
};

const parseItemsData = (itemsData) => {
  const author = {
    name: "Fabian",
    lastname: "Romero",
  };

  return {
    author,
    categories: getItemCategories(
      itemsData.filters[0].values[0].path_from_root
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
        amount: item.installments.amount,
        decimals: item.installments.amount % 1,
      },
      picture: item.thumbnail,
      condition: item.condition,
      free_shipping: item.shipping.free_shipping,
    };
  });
};

const getItemCategories = (itemCategories) => {
  return itemCategories.map((a) => a.name);
};

export default getMeLiItems;
