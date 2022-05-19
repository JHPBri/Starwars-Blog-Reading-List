import React from "react";
import "../../styles/home.css";
import PeopleCard from "../component/PeopleCard";
import PlanetCard from "../component/PlanetsCard";

export const Home = () => (
	<div className="mt-5">
		<PeopleCard />
		<PlanetCard />
	</div>
);
