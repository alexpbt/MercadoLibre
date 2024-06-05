import expressAsyncHandler from "express-async-handler";
import getMeLiItems from "../services/getItems.js";
import getMeLiItemDetails from "../services/getItemDetails.js";

//@desc Get items data from endpoint
//route POST api/items?query
//@access public

const getItems = expressAsyncHandler(async (req, res) => {
  const productQuery = req.query.q;
  const items = await getMeLiItems(productQuery);

  res.status(200).json({
    message: "Getting data from endpoint",
    items,
  });
});

//@desc Get item details by ID from endpoint
//route POST api/items/:id
//@access public

const getItemDetails = expressAsyncHandler(async (req, res) => {
  const productId = req.params.id;
  const item = await getMeLiItemDetails(productId);

  res.status(200).json({
    message: "Getting item details data from endpoint",
    item,
  });
});

export { getItems, getItemDetails };
