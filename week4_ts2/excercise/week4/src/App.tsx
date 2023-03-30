import { useState, useEffect } from "react";
import "./App.css";
import AddPerson from "./components/AddPerson";
import DeletePerson from "./components/DeletePerson";
import EditPerson from "./components/EditPerson";
import PeopleList from "./components/PeopleList";
import { People } from "./utils/types";

function App() {
  const [people, setPeople] = useState<People[]>([]);
  const [editting, setEdditing] = useState<[boolean, number]>([false, 0]);

  const fetchPeople = async () => {
    const peoples = await fetch("http://localhost:3008/person");
    const data = await peoples.json();
    setPeople(data);
  };

  useEffect(() => {
    fetchPeople();
  }, []);

  return (
    <div className="App flex flex-col w-screen h-screen bg-slate-900 text-white">
      <div className="flex mx-auto">
        <div className="flex flex-col p-5">
          {people.length > 0 && (
            <PeopleList
              people={people}
              editting={editting}
              setEditting={setEdditing}
              setPeople={setPeople}
            />
          )}
        </div>
        <div className="flex flex-col p-5 gap-4">
          <AddPerson setPeople={setPeople} people={people} />
          <EditPerson
            people={people}
            editting={editting}
            setEditting={setEdditing}
            setPeople={setPeople}
          />
        </div>
      </div>
      <div className="flex mx-auto">
        <DeletePerson people={people} setPeople={setPeople} />
      </div>
    </div>
  );
}

export default App;
