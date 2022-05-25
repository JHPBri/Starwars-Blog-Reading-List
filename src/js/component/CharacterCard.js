import React, { useContext, useState, useEffect } from 'react';
//import { useEffect } from 'react/cjs/react.production.min';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { Context } from '../store/appContext' //API access

function CharacterCard(props){
    const {store, actions} = useContext(Context);
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
                        <p className="card-text">Gender: {props.gender}</p>
                        <p className="card-text">Birth Year: {props.birthYear}</p>
                        <p className="card-text">Height: {props.height}</p>
                        <p className="card-text">Hair Color: {props.hairColor}</p>
                        <p className="card-text">Eye Color: {props.eyeColor}</p>
                        <p className="card-text">Home World: {props.homeWorld}</p>

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

CharacterCard.propTypes = {
    name: PropTypes.string,
    height: PropTypes.number,
    hairColor: PropTypes.string,
    skinColor: PropTypes.string,
    birthYear: PropTypes.string,
    gender: PropTypes.string,
    homeWorld: PropTypes.string,

    

}


export default CharacterCard;