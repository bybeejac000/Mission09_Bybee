import './App.css';
import data from './CollegeBasketballTeams.json';

var team = data.teams[0];
var teams = data.teams;

function Heading() {
  return <h1>Welcome to the teams page!</h1>;
}

function TeamCard({
  name,
  mascot,
  city,
  state,
}: {
  name: string;
  mascot: string;
  city: string;
  state: string;
}) {
  return (
    <>
      <div style={{ border: '2px solid #000', padding: '10px' }}>
        <h2>School Name: {name}</h2>
        <h2>Mascot: {mascot}</h2>
        <h2>
          Location: {city}, {state}
        </h2>
      </div>
    </>
  );
}

function BigData() {
  return teams.map((r) => (
    <TeamCard name={r.school} mascot={r.name} city={r.city} state={r.state} />
  ));
}

function App() {
  return (
    <>
      <Heading />
      <BigData />
    </>
  );
}

export default App;
