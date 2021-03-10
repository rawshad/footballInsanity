import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react';
import TeamCard from './Components/TeamCard/TeamCard';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [team, setTeam] = useState([]);
  useEffect(() => {
    fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League')
      .then(res => res.json())
      // .then(data => setTeam(data.teams))
      .then(data => setTeam(data.teams))
      .catch(error => console.log('ERROR'))
  }, []);
  console.log(team);
  return (
    <section className="container">
      <div className="row">
        {team.map(team => <TeamCard team={team} key={team.idTeam}></TeamCard>)}
      </div>
    </section>
  );
}

export default App;
