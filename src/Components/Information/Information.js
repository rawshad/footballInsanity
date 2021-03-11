import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import './Information.css';
import { faFlag, faFutbol, faMars, faPodcast } from '@fortawesome/free-solid-svg-icons';
import { useParams } from 'react-router';
import Header from '../Header/Header';

const Information = (props) => {
    const { teamId } = useParams();
    const [information, setInfo] = useState({});
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setInfo(data.teams[0]))
    }, []);
    const { idAPIfootball, intFormedYear, strCountry, strGender, strSport,
        strTeamFanart3, strTeam, strDescriptionEN, strStadiumDescription,
        strFacebook, strYoutube, strTwitter } = information;
    console.log(information);
    return (
        <div>
            <Header />
            <section className="container team__information p-4">
                <div className="row">
                    <div className="col-md-6 p-4">
                        <h3 className="font-weight-bolder text-white">{strTeam}</h3>
                        <ul className="league__info">
                            <li><FontAwesomeIcon className="league__info__icon" icon={faPodcast} />Founded: February 20, {intFormedYear}</li>
                            <li><FontAwesomeIcon className="league__info__icon" icon={faFlag} />Country: {strCountry}</li>
                            <li><FontAwesomeIcon className="league__info__icon" icon={faFutbol} />Sport Type: {strSport}</li>
                            <li><FontAwesomeIcon className="league__info__icon" icon={faMars} />Gender: {strGender}</li>
                        </ul>
                    </div>
                    <div className="col-md-6 p-4 team__banner">
                        <img className="img-fluid rounded" src={strTeamFanart3} />
                    </div>
                    <section className="container p-4">
                        <div className="row">
                            <div className="col-md-12">
                                <p className="text-white text-justify">{strDescriptionEN}</p>
                                <p className="text-white text-justify">{strStadiumDescription}</p>
                            </div>
                        </div>
                    </section>
                </div>
            </section>
            <footer className="container">
                <a href={strFacebook} className="footer__btn"><button type="button" className="btn"><FontAwesomeIcon icon={faFacebookF} /></button></a>
                <a href={strYoutube} className="footer__btn"><button type="button" className="btn"><FontAwesomeIcon icon={faYoutube} /></button></a>
                <a href={strTwitter} className="footer__btn"><button type="button" className="btn"><FontAwesomeIcon icon={faTwitter} /></button></a>
            </footer>
        </div>
    );
};

export default Information;