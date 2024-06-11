import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { fetchData } from "../services/FetchDataService";
import "../styles/ItemDetails.scss";
import Header from "../components/Header";

const ItemDetails = () => {
	const location = useLocation();
	const [results, setResults] = useState([]);
	const [loading, setLoading] = useState(false);
	const idData = location.state.id;

	useEffect(() => {
		const fetchDataAsync = async () => {
			setLoading(true);
			try {
				const results = await fetchData(`/api/items/${idData}`);

				setResults(results.items.item);
			} catch (error) {
				console.error(error);
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

	return loading ? (
		<p>Loading...</p>
	) : (
		<>
			<Header />
			<section className="item-detail">
				<div className="item-detail__wrapper">
					<div className="item-detail__wrapper-img">
						<img loading="lazy" src={results.picture} alt={results.title} />
					</div>
					<div className="item-detail__wrapper-info">
						<span className="item-detail__wrapper-info-eyebrow">
							{results.condition}
						</span>
						<h2 className="item-detail__wrapper-info-title">{results.title}</h2>
						<span className="item-detail__wrapper-info-price">
							{formatter.format(Math.round(results.price?.amount))}
						</span>
						<button className="item-detail__wrapper-info-button">
							Comprar
						</button>
					</div>
					{results.description !== "" ? (
						<div className="item-detail__wrapper-desc">
							<h3>Descripción del producto</h3>
							<p>{results.description}</p>
						</div>
					) : (
						""
					)}
				</div>
			</section>
		</>
	);
};

export default ItemDetails;
