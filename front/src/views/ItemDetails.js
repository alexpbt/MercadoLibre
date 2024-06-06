import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { FetchData } from "../services/FetchDataService";

const ItemDetails = () => {
	const location = useLocation();
	const query = new URLSearchParams(location.search).get("search");
	const [results, setResults] = useState([]);
	const [dataState, setDataState] = useState(false);

	useEffect(() => {
		const loadData = async () => {
			const results = await FetchData("https://restcountries.com/v3.1/all");
			setResults(results);
			setDataState(false);
		};

		loadData();
	});

	return <ul>JELOU</ul>;
};

export default ItemDetails;
