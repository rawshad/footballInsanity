import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import './TeamCard.css';

const TeamCard = (props) => {
    const {strTeamBadge, strTeam, strSport} = props.team;
    return (
        <div className="col mb-4">
            <div className="card h-100 p-4">
                <img src={strTeamBadge} alt="team__logo" className="card-img-top"/>
                <div className="card-body">
                    <h5 className="card-title text-center text-uppercase font-weight-bolder league__name">{strTeam}</h5>
                    <p className="card-text text-center league__sports">Sports Type : {strSport}</p>
                </div>
                <div className="card-footer league__button--area">
                    <button className="btn text-uppercase league__button">Explore <FontAwesomeIcon icon={faArrowRight} /></button>
                </div>
            </div>
        </div>
    );
};

export default TeamCard;