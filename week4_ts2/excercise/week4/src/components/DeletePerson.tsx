import React, { SetStateAction } from "react";
import { People } from "../utils/types";

type props = {
  people: People[];
  setPeople: React.Dispatch<SetStateAction<People[]>>;
};

const DeletePerson: React.FC<props> = ({ people, setPeople }) => {
  const findHighestId = (): number => {
    let highest = 0;
    people.map((el) => el.id > highest && (highest = el.id));
    return highest;
  };
  const handleDelete = async () => {
    const personToDelete = people.find((el) => el.id === findHighestId());
    await fetch("http://localhost:3008/person/" + personToDelete!.id, {
      method: "DELETE",
    });
    const newPeopleList = people.filter((el) => el.id != personToDelete!.id);
    setPeople(newPeopleList);
  };

  return (
    <div>
      <button className="defaultbtn bg-red-700" onClick={handleDelete}>
        Delete Latest
      </button>
    </div>
  );
};

export default DeletePerson;
