import React, { useState } from "react";

interface Food {
	[key: string]: any;
}
const MenuCard = (props: Food) => {
	const {item} = props
	return (
		<div className="tarjetMenu">
			<img className="imgMenu" src={item.imgMenu} />
			<span className="foodMenu">{item.food}</span>
		</div>
	);
};

export default MenuCard;
