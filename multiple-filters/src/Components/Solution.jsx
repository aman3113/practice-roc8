import React, { useState } from "react";
import "./Style.css";
import { filters } from "./filters";
import { items } from "./items";

export default function Solution() {
	const [appliedFilters, setAppliedFilters] = useState({
		Bags: false,
		Watches: false,
		Sports: false,
		Sunglasses: false,
	});
	// getting applied filters in array
	const filtersArr = Object.keys(appliedFilters).filter(
		(key) => appliedFilters[key]
	);
	// filtering items based on selected filters
	const filteredItemsArr =
		filtersArr.length > 0
			? items.filter((item) => filtersArr.some((el) => el === item.category))
			: items;

	function handleButtonClick(e) {
		const category = e.target.textContent;
		setAppliedFilters((prev) => ({
			...prev,
			[category]: !prev[category],
		}));
	}

	return (
		<div className="container">
			<h2 style={{ textAlign: "center" }}>MoonshotX Filters</h2>
			<div className="buttons-container">
				{filters.map((filter, idx) => (
					<div
						className={`button ${appliedFilters[filter] && "active"}`}
						key={idx}
						data-testid={`${filter}-button`}
						onClick={handleButtonClick}
					>
						{filter}
					</div>
				))}
			</div>
			<div className="items-container">
				{filteredItemsArr?.map((item, idx) => (
					<div className="item" key={idx} data-testid={item.name}>
						<p>{item.name}</p>
						<p className="category">{item.category}</p>
					</div>
				))}
			</div>
		</div>
	);
}
