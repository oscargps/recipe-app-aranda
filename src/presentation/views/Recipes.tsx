import React from "react";
import "../assets/css/recipes.scss";
import tarjets2 from '../../app/utils/menu'
import RecipeCard from "../components/RecipeCard";
import MenuCard from "../components/MenuCard";
const Recipes = () => {
	const plato = {
		idnormal: "abx",
		idhover: "abx",
		foodDesc: "descripcion",
		food: "comida",
		calification: "5.0"
	};


	return (
		<>
			<div className="imgHead">
				<div className="floatText">
					<div className="text1">Recetas</div>
					<div className="text2">para todos</div>
				</div>
			</div>
			<div id="menuHead2" className="menuHeads">
				{tarjets2.map((item) => {
					return <MenuCard item={item} />;
				})}
			</div>
			<div className="recipe">
				<div className="recipesTitle">Nuevas Recetas</div>
				<div className="contCarrusel">
					<ul id="carruselini" className="carrusel">
						<RecipeCard element={plato} />
					</ul>
					<ul id="carruselfin" className="carrusel">
						<RecipeCard element={plato} />
					</ul>
				</div>
			</div>
		</>
	);
};

export default Recipes;
