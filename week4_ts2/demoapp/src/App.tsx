import { useState, useEffect } from "react";
import { People } from "./types";
import "./App.css";
import InputComponent from "./InputComponent";
import OutputComponent from "./OutputComponent";
import PeopleViewer from "./PeopleViewer";

function App() {
  const [name, setName] = useState<string>("");
  const [people, setPeople] = useState<People[]>([]);

  const fetchPeople = async () => {
    const peoples = await fetch("http://localhost:3008/person");
    const data = await peoples.json();
    setPeople(data);
  };

  useEffect(() => {
    fetchPeople();
  }, []);

  return (
    <div className="App">
      <InputComponent setName={setName} name={name} />
      <OutputComponent name={name} />
      {people.length > 0 && <PeopleViewer people={people} />}
    </div>
  );
}

export default App;
