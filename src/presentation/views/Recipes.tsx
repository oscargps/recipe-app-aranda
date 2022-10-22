import "../assets/css/recipes.scss";
import tarjets2 from "../../app/utils/menu";
import RecipeCard from "../components/RecipeCard";
import MenuCard from "../components/MenuCard";
import { useAPI } from "../../app/context";

const Recipes = () => {
	const recipes: any = useAPI();

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
						{recipes.recipes.map((recipe: any) => {
							return (
								<>
									<RecipeCard element={recipe} />
								</>
							);
						})}
					</ul>
					<ul id="carruselfin" className="carrusel">
						{recipes.recipes.map((recipe: any) => {
							return (
								<>
									<RecipeCard element={recipe} />
								</>
							);
						})}
					</ul>
				</div>
			</div>
		</>
	);
};

export default Recipes;
