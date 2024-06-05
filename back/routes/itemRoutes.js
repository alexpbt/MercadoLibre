import express from "express";
import { getItems, getItemDetails } from "../controllers/itemController.js";

const router = express.Router();
router.get("/items/", getItems);
router.get("/items/:id", getItemDetails);

export default router;
