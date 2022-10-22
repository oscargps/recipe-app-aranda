import React, { useState, MouseEvent } from "react";
import "../assets/css/recipecard.scss";
import ic_star from "../assets/icons/ic_star.svg";
import favorite from "../assets/icons/ic-favorite.svg";
import ic_portion from "../assets/icons/ic_portion.svg";
import ic_time from "../assets/icons/ic_time.svg";
import ic_chef from "../assets/icons/ic_chef.svg";
import cherry from "../assets/img/cherry.png";
interface Recipe {
	[key: string]: any;
}
const RecipeCard = (props: Recipe) => {
	const { element } = props;
	const [showDescription, setShowDescription] = useState(true);
	function showHover() {
		setShowDescription(false);
	}
	function out() {
		setShowDescription(true);
	}

	return (
		<>
			<li className="tarjet" onMouseOver={showHover} onMouseOut={out}>
				<div
					className="plate"
					style={{ backgroundImage: `url(${element.thumbnail_url})` }}
				></div>
				{showDescription ? (
					<div id={element.show_id} className="normalTarjet">
						<div className="textFood">
							<span className="food">{element.name}</span>
							{/* <span className="foodDesc">{element.name}</span> */}
						</div>
						<div className="score">
							<img className="star" src={ic_star} />
							<span>{element.user_ratings.score} </span>
							<img className="heart" src={favorite} />
						</div>
					</div>
				) : (
					<div id={element.idhover} className="divhover">
						<div className="hoverTarjet">
							<div className="descriptionHover">
								<img className="imgHover" src={ic_portion} />
								<span className="titTextHover">
									Tama&ntilde;o de la porci&oacute;n
								</span>
								<span className="textHover">{element.num_servings} raciones</span>
							</div>
							<div className="descriptionHover">
								<img className="imgHover" src={ic_time} />
								<span className="titTextHover">
									Tiempo de preparaci&oacute;n
								</span>
								<span className="textHover">{element.total_time_minutes} minutos</span>
							</div>
							<div className="descriptionHover">
								<img className="imgHover" src={ic_chef} />
								<span className="titTextHover">Dificultad</span>
								<span className="textHover">f&aacute;cil</span>
							</div>
						</div>
					</div>
				)}
			</li>
		</>
	);
};

export default RecipeCard;
