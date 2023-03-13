import "./App.css";
import { Greet } from "./components/Greet";
import { Person } from "./components/Person";
import { PersonList } from "./components/PersonList";

function App() {
  const personName = {
    firstName: "Bruce",
    lastName: "Wayne",
  };

  const nameList = [
    { fistName: "Green", lastName: "Lantern" },
    { fistName: "Clark", lastName: "Kent" },
    { fistName: "Princess", lastName: "Diana" },
  ];
  return (
    <div className="App">
      <Greet name="Sanu" messageCount={20} isLoggedIn={true} />
      <Person name={personName} />
      <PersonList names={nameList} />
    </div>
  );
}

export default App;
