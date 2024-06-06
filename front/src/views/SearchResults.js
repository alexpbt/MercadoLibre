import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { FetchData } from "../services/FetchDataService";
import { useNavigate } from "react-router-dom";

const SearchResults = () => {
	const location = useLocation();
	const navigate = useNavigate();
	const query = new URLSearchParams(location.search).get("search");
	const [results, setResults] = useState([]);
	const [loading, setLoading] = useState(false);

	console.log(`Here is the query: ${query}`);

	useEffect(() => {
		const fetchDataAsync = async () => {
			setLoading(true);
			try {
				const results = await FetchData(`/api/items?q=${query}`);

				setResults(results.items.items);
			} finally {
				setLoading(false);
			}
		};

		if (query !== "") {
			fetchDataAsync();
		} else {
			setResults([]);
		}
	}, [query]);

	function goToItemDetail(e) {
		navigate(`/items/${e.target.value}`);
	}

	console.log(results);

	return (
		<div>
			{results.map((result, index) => (
				<button value={result.id} key={index} onClick={goToItemDetail}>
					{result.id}
				</button>
			))}
		</div>
	);
};

export default SearchResults;
