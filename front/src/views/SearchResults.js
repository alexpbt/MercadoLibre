import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { fetchData } from "../services/FetchDataService";
import Header from "../components/Header";

import "../styles/SearchResults.scss";

const SearchResults = () => {
	const location = useLocation();
	const query = new URLSearchParams(location.search).get("search");
	const [results, setResults] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const fetchDataAsync = async () => {
			setLoading(true);
			try {
				const results = await fetchData(`/api/items?q=${query}`);

				setResults(results.items.items);
			} catch (error) {
				console.error(error);
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

	const formatter = new Intl.NumberFormat("es-AR", {
		style: "currency",
		currency: "ARS",
		minimumFractionDigits: 0,
	});

	return loading ? (
		<p>Loading...</p>
	) : (
		<>
			<Header />
			<section className="items-list">
				<ul className="items-list__list">
					{results.map((item, index) => (
						<li key={index} className="items-list__list-element">
							<Link
								to={"/items/" + item.id}
								state={{ id: item.id }}
								className="items-list__list-element-link"
							>
								<img
									loading="lazy"
									className="items-list__list-element-img"
									src={item.picture}
									alt={item.name}
								/>
								<div className="items-list__list-element-info">
									<span
										aria-hidden="true"
										className="items-list__list-element-info-value"
									>
										{formatter.format(Math.round(item.price.amount))}
									</span>
									<p className="items-list__list-element-info-title">
										{item.title}
									</p>
								</div>
							</Link>
						</li>
					))}
				</ul>
			</section>
		</>
	);
};

export default SearchResults;
