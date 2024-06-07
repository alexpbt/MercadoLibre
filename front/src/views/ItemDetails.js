import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { FetchData } from "../services/FetchDataService";
import "../styles/ItemDetails.scss";

const ItemDetails = () => {
	const location = useLocation();
	const [results, setResults] = useState([]);
	const [loading, setLoading] = useState(false);
	const idData = location.state.id;

	useEffect(() => {
		const fetchDataAsync = async () => {
			setLoading(true);
			try {
				const results = await FetchData(`/api/items/${idData}`);

				setResults(results.items.item);
			} finally {
				setLoading(false);
			}
		};

		if (idData !== "") {
			fetchDataAsync();
		} else {
			setResults([]);
		}
	}, [idData]);

	const formatter = new Intl.NumberFormat("es-AR", {
		style: "currency",
		currency: "ARS",
		minimumFractionDigits: 0,
	});

	console.log(results);

	return loading ? (
		<p>Loading...</p>
	) : (
		<section className="item-detail">
			<div className="item-detail__wrapper">
				<div className="item-detail__wrapper-img">
					<img src={results.picture} alt={results.title} />
				</div>
				<div className="item-detail__wrapper-info">
					<span className="item-detail__wrapper-info-eyebrow">
						{results.condition}
					</span>
					<h2 className="item-detail__wrapper-info-title">{results.title}</h2>
					<span className="item-detail__wrapper-info-price">
						{formatter.format(Math.round(results.price?.amount))}
					</span>
					<button className="item-detail__wrapper-info-button">Comprar</button>
				</div>
				<div className="item-detail__wrapper-desc">
					<h3>Descripción del producto</h3>
					<p>{results.description}</p>
				</div>
			</div>
		</section>
	);
};

export default ItemDetails;
