import React, { SetStateAction, useEffect, useState } from "react";
import { People } from "../utils/types";

type props = {
  people: People[];
  setPeople: React.Dispatch<SetStateAction<People[]>>;
  editting: [boolean, number];
  setEditting: React.Dispatch<SetStateAction<[boolean, number]>>;
};

const EditPerson: React.FC<props> = ({
  people,
  editting,
  setPeople,
  setEditting,
}) => {
  const [newName, setNewName] = useState("");
  const [newAge, setNewAge] = useState(0);
  const [newCity, setNewCity] = useState("");
  const [personToEdit, setPersonToEdit] = useState<People>();

  useEffect(() => {
    {
      editting[1] > 0 &&
        setPersonToEdit(
          people.find((person: People) => person.id === editting[1])
        );
      console.log(personToEdit);
      if (personToEdit != undefined) {
        setNewName(personToEdit.name);
        setNewAge(personToEdit.age);
        setNewCity(personToEdit.city);
      }
      console.log(newName, newAge, newCity);
    }
  }, [editting]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (personToEdit != undefined) {
      personToEdit.name = newName;
      personToEdit.age = newAge;
      personToEdit.city = newCity;
    }

    console.log(personToEdit?.name, personToEdit?.age, personToEdit?.city);

    await fetch("http://localhost:3008/person/" + editting[1], {
      method: "PUT",
      body: JSON.stringify(personToEdit),
      headers: {
        "Content-Type": "application/json",
      },
    });

    setEditting([false, 0]);

    // // people.forEach((el) => {
    // //   if (el.id === editting[1]) {
    // //     el.name = newName;
    // //     el.age = newAge;
    // //     el.city = newCity;
    // //   }
    // // });
    // const newPeople = people;
    // newPeople.forEach((el) => {
    //   if (el.id === editting[1]) {
    //     el.name = newName;
    //     el.age = newAge;
    //     el.city = newCity;
    //   }
    // });
    // setPeople(newPeople);
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-xl">Edit Person</h1>
      <form className="flex flex-col gap-2" onSubmit={(e) => handleSubmit(e)}>
        {editting[0] ? (
          <>
            <input
              type="text"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
            />
            <input
              type="number"
              value={newAge}
              onChange={(e) => setNewAge(parseInt(e.target.value))}
            />
            <input
              type="text"
              value={newCity}
              onChange={(e) => setNewCity(e.target.value)}
            />
            <button className="defaultbtn bg-green-600" type="submit">
              Confirm
            </button>
          </>
        ) : (
          <>
            <input className="opacity-50" disabled type="text" />
            <input className="opacity-50" disabled type="number" />
            <input className="opacity-50" disabled type="number" />
            <button className="defaultbtn bg-green-900 opacity-50" disabled>
              Confirm
            </button>
          </>
        )}
      </form>
    </div>
  );
};

export default EditPerson;
