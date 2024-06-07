import React from "react";
import { SearchBar } from "./SearchBar";

const Header = () => {
	return (
		<header className="nav-header">
			<section className="nav-content">
				<div className="meli-logo">
					<img src="/assets/meli-logo.png" alt="Logo Mercadolibre" />
				</div>
				<SearchBar />
			</section>
		</header>
	);
};

export default Header;
