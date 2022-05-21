import React, { useContext } from 'react';
//import { useEffect } from 'react/cjs/react.production.min';
import PropTypes from 'prop-types';
import { Context } from '../store/appContext' //API access

function Card(props){
    //const imgSrc = ""
    const{store, actions } = useContext(Context)
    return (
        <div className="jumbotron jumbotron-fluid">
            <h1 className='text-danger'>Character</h1>
            <div className="container d-flex flex-row flex-nowrap">
                <div className="card w-auto" >
                    <div className="card-body">
                        <h5 className="card-title">{props.name}</h5>
                        <p className="card-text">{props.description ? (`Description: ${props.description}`) : ''}</p>
                        <p className="card-text">{props.population ? (`Population: ${props.population}`) : ''}</p>
                        <p className="card-text">{props.terrain ? (`Terrain: ${props.terrain}`) : ''}</p>
                        <p className="card-text">{props.climate ? (`Climate: ${props.climate}`) : ''}</p>


                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
                
            </div>
            
        </div>
    );

}

Card.propTypes = {
    section: PropTypes.string,
    
    //People:
    uid:PropTypes.number,
    name:PropTypes.string,
    url:PropTypes.string,

    //Planets:
    diameter:PropTypes.number,
    rotation_period:PropTypes.number,
    orbital_period: PropTypes.number,
    gravity:PropTypes.string,
    population: PropTypes.number,
    climate:PropTypes.string,
    terrain: PropTypes.string,
    surface_water: PropTypes.number,
    created: PropTypes.string,
    description: PropTypes.string

}


export default Card;