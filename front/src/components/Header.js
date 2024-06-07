import React from "react";
import { SearchBar } from "./SearchBar";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<header className="nav-header">
			<section className="nav-content">
				<div className="meli-logo">
					<Link to={"/"}>
						<img src="/assets/meli-logo.png" alt="Logo Mercadolibre" />
					</Link>
				</div>
				<SearchBar />
			</section>
		</header>
	);
};

export default Header;
