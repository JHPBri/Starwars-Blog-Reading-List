import React, {useContext} from "react";
import "../../styles/home.css";
import CharacterCard from "../component/CharacterCard";
import PlanetCard from "../component/PlanetCard"
import VehicleCard from "../component/PlanetCard"
import { Context } from '../store/appContext' //API access



export const Home = () => {



	const { store, actions } = useContext(Context);
	return (
		<>
			<div className="container">
				<h1>Characters</h1>
				<div className="row">
					{store.people.map((person, index) => {
						return (
							<div className="mb-3 col-3" key={index}>
								<CharacterCard
									hairColor={person.hair_color}
									eyeColor={person.eye_color}
									gender={person.gender}
									homeWorld={person.homeworld}
									birthYear={person.birth_year}
									name={person.name}
									index={index}
								/>
							</div>
						);
					})}
				</div>
				<h1>Planets</h1>
				<div className="row">
					{store.planets.map((planet, index) => {
						return (
							<div className="mb-3 col-3" key={index}>
								<PlanetCard
									index={index}
									terrain={planet.terrain}
									population={planet.population}
									name={planet.name}
								/>
							</div>
						);
					})}
				</div>
				<h1>Vehicles</h1>
				<div className="row">
					{store.vehicles.map((vehicle, index) => {
						return (
							<div className="mb-3 col-3" key={index}>
								<VehicleCard
									model={vehicle.model}
									manufacturer={vehicle.manufacturer}
									name={vehicle.name}
								/>
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
}
	
	

	
	
	

	
	

