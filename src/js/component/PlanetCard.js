import React, { useContext, useState, useEffect } from 'react';
//import { useEffect } from 'react/cjs/react.production.min';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { Context } from '../store/appContext' //API access

function PlanetCard(props){


    const { store, actions } = useContext(Context);
	const [isFavorite, setIsFavorite] = useState(false);

	useEffect(
		() => {
			setIsFavorite(store.favorites.includes(props.name));
		},
		[store.favorites]
	);

    //const imgSrc = ""
    return (
        <div className="jumbotron jumbotron-fluid">
            <div className="container d-flex flex-row flex-nowrap">
                <div className="card w-auto" >
                    <div className="card-body">
                        <h5 className="card-title">{props.name}</h5>
                        <p className="card-text">Rotation Period: {props.rotation_period}</p>
                        <p className="card-text">Orbital Period: {props.orbital_period}</p>
                        <p className="card-text">Diameter: {props.diameter}</p>
                        <p className="card-text">Climate: {props.climate}</p>
                        <p className="card-text">Gravity: {props.gravity}</p>
                        <p className="card-text">Terrain: {props.terrain}</p>
                        <p className="card-text">Surface Water: {props.surfrace_water}</p>
                        <p className="card-text">Population: {props.population}</p>
                    <div className="footer-card">
					<Link to={`/single/planet/${props.name}`}>
						<button className="btn btn-primary">Learn more</button>
					</Link>
					<button
						className="btn btn-light"
						onClick={() => {
							actions.addToFavorite(props.name);
							// setIsActive(!isActive);
						}}>
						<i className={isFavorite ? "fas fa-heart" : "far fa-heart"} />
					</button>
				</div>

                    </div>
                </div>
                
            </div>
            
        </div>
    );

}

PlanetCard.propTypes = {
    name: PropTypes.string,
    rotation_period: PropTypes.number,
    orbital_period: PropTypes.number,
    diameter: PropTypes.number,
    climate: PropTypes.string,
    gravity: PropTypes.string,
    terrain: PropTypes.string,
    surfrace_water: PropTypes.string,
    population: PropTypes.string,

    

}
export default PlanetCard;