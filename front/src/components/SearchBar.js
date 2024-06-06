import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchBar() {
	const navigate = useNavigate();
	const [query, setQuery] = useState("");

	const HandleInputChange = (e) => {
		setQuery(e.target.value);
	};

	const keyboardEnterHandler = (e) => {
		if (e.key === "Enter") {
			setQuery(e.target.value);
			searchItems();
		}
	};

	const searchItems = () => {
		console.log("Navigating to results page from SearchBar");
		navigate(`/items?search=${query}`);
	};

	const formSubmitHandler = () => {
		console.log("Form submitted :)");
	};

	return (
		<div className="meli-searchbar">
			<form onSubmit={formSubmitHandler} className="meli-searchbar__form">
				<input
					className="meli-searchbar__form-input"
					type="text"
					onChange={HandleInputChange}
					onKeyDown={keyboardEnterHandler}
					placeholder="Buscar productos, marcas y más... "
				/>
				<button type="submit" className="meli-searchbar__form-button"></button>
			</form>
		</div>
	);
}

export { SearchBar };
