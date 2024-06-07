import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import SearchResults from "./views/SearchResults";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetails from "./views/ItemDetails";
import Header from "./components/Header";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<App />} />
			<Route path="/items" element={<SearchResults />} />
			<Route path="/items/:id" element={<ItemDetails />} />
		</Routes>
	</BrowserRouter>
);
