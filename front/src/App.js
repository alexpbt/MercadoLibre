import "./styles/App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchResults from "./views/SearchResults";
import ItemDetails from "./views/ItemDetails";
import { SearchPage } from "./views/SearchPage";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<SearchPage />} />
				<Route path="/items" element={<SearchResults />} />
				<Route path="/items/:id" element={<ItemDetails />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
