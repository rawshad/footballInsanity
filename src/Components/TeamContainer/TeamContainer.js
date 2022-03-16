import React from 'react';
import { useEffect, useState } from 'react';
import './TeamContainer.css';
import TeamCard from '../TeamCard/TeamCard';

const TeamContainer = () => {
    const [team, setTeam] = useState([]);
  useEffect(() => {
    // fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League')
    fetch("https://www.thesportsdb.com/api/v1/json/2/search_all_teams.php?l=English%20Premier%20League")
      .then(res => res.json())
      // .then(data => setTeam(data.teams))
      .then(data => setTeam(data.teams))
      .catch(error => console.log('ERROR'))
  }, []);
  // console.log(team);
  return (
    <section className="container team__container">
      <div className="row">
        {team.map(team => <TeamCard team={team} key={team.idTeam}></TeamCard>)}
      </div>
    </section>
  );
};

export default TeamContainer;