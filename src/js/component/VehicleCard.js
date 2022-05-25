import React, { useContext, useState, useEffect } from 'react';
//import { useEffect } from 'react/cjs/react.production.min';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { Context } from '../store/appContext' //API access

function VehicleCard(props){
    //const imgSrc = ""
    const { store, actions } = useContext(Context);
	const [isFavorite, setIsFavorite] = useState(false);

	useEffect(
		() => {
			setIsFavorite(store.favorites.includes(props.name));
		},
		[store.favorites]
	);




    return (
        <div className="jumbotron jumbotron-fluid">
            <div className="container d-flex flex-row flex-nowrap">
                <div className="card w-auto" >
                    <div className="card-body">
                        <h5 className="card-title">{props.name}</h5>
                        <p className="card-text">Model: {props.model}</p>
                        <p className="card-text">Manufacturer: {props.manufacturer}</p>
                        <p className="card-text">Credits: {props.cost_in_credits}</p>
                        <p className="card-text">Length: {props.length}</p>
                        <p className="card-text">Max Atmospehering Speed: {props.max_atmospehereing_speed}</p>
                        <p className="card-text">Crew: {props.crew}</p>
                        <p className="card-text">Vehicle Class: {props.vehicle_class}</p>


                    <div className="footer-card">
                        <Link to={`/single/person/${props.name}`}>
                            <button className="btn btn-primary">Learn more</button>
                        </Link>
                        <button
                            className="btn btn-light"
                            onClick={() => {
                                actions.addToFavorite(props.name);
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

VehicleCard.propTypes = {
    name: PropTypes.string,
    model: PropTypes.string,
    manufacturer: PropTypes.string,
    cost_in_credits: PropTypes.number,
    length: PropTypes.number,
    max_atmospehereing_speed: PropTypes.number,
    crew: PropTypes.number,
    passengers: PropTypes.number,
    cargo_capacity: PropTypes.number,
    consumables: PropTypes.string,
    vehicle_class: PropTypes.string,
}
export default VehicleCard;