import React, { useState,useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Recipes from "../views/Recipes";
import { APIContextProvider } from "../../app/context";

const Layout = () => {


	return (
		<>
			<APIContextProvider>
				<Header />
				<Recipes />
				<Footer />
			</APIContextProvider>
		</>
	);
};

export default Layout;
