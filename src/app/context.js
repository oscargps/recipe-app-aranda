import React, { useContext, useState, useEffect, createContext } from "react";
import { getRecipes } from "../services/getRecipes";

const RecipeContext = createContext([]);

export function APIContextProvider(props) {
	const { children } = props;
	const [recipes, setRecipes] = useState([]);
	useEffect(() => {
		async function fetchData() {
			const { results } = await getRecipes();
			setRecipes(results);
		}
		fetchData();
	}, []);
	return (
		<RecipeContext.Provider
			value={{
				recipes
			}}
		>
			{children}
		</RecipeContext.Provider>
	);
}

export function useAPI() {
	const context = useContext(RecipeContext);
	if (context === undefined) {
		throw new Error("Context must be used within a Provider");
	}
	return context;
}
