import { SetStateAction, useState } from "react";
import { People } from "../utils/types";

type props = {
  setPeople: React.Dispatch<SetStateAction<People[]>>;
  people: People[];
};

const AddPerson: React.FC<props> = ({ setPeople, people }) => {
  const [nameI, setNameI] = useState("");
  const [ageI, setAgeI] = useState(0);
  const [cityI, setCityI] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const PersonToAdd = {
      id: people.length + 1,
      name: nameI,
      age: ageI,
      city: cityI,
    };

    console.log(JSON.stringify(PersonToAdd));

    const data = await fetch("http://localhost:3008/person", {
      method: "POST",
      body: JSON.stringify(PersonToAdd),
      headers: {
        "Content-Type": "application/json",
      },
    });
    setPeople([...people, PersonToAdd]);
    setNameI("");
    setAgeI(0);
    setCityI("");
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-lg">Add Person</h1>
      <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col gap-2">
        <input
          value={nameI}
          onChange={(e) => setNameI(e.target.value)}
          required
          type="text"
          name="namei"
          placeholder="name"
        />
        <input
          value={ageI}
          onChange={(e) => setAgeI(parseInt(e.target.value))}
          required
          type="number"
          name="agei"
          placeholder="age"
        />
        <input
          value={cityI}
          onChange={(e) => setCityI(e.target.value)}
          required
          type="text"
          name="city"
          placeholder="city"
        />
        <button type="submit" className="defaultbtn bg-green-600">
          Add Person
        </button>
      </form>
    </div>
  );
};

export default AddPerson;
