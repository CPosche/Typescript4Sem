import { SetStateAction, useEffect, useState } from "react";
import { People } from "../utils/types";

type props = {
  people: People[];
  editting: [boolean, number];
  setEditting: React.Dispatch<SetStateAction<[boolean, number]>>;
  setPeople: React.Dispatch<SetStateAction<People[]>>;
};

const PeopleList: React.FC<props> = ({
  people,
  editting,
  setEditting,
  setPeople,
}) => {
  const toggleEdit = (e: string) => {
    setEditting([true, parseInt(e)]);
  };

  const [sort, setSort] = useState<[[People[], boolean], string]>([
    [people, true],
    "",
  ]);

  const handleSort = (sortby: string) => {
    const newPeople = sort[0][0];
    switch (sortby) {
      case "#":
        console.log("#");
        newPeople.sort((el, other) =>
          sort[0][1] ? el.id - other.id : other.id - el.id
        );
        setPeople(newPeople);
        setSort([[people, !sort[0][1]], "#"]);
        break;
      case "name":
        console.log("name");
        newPeople.sort((el, other) =>
          sort[0][1]
            ? el.name > other.name
              ? -1
              : 1
            : el.name < other.name
            ? -1
            : 1
        );
        setPeople(newPeople);
        setSort([[people, !sort[0][1]], "name"]);
        break;
      case "age":
        console.log("age");
        newPeople.sort((el, other) =>
          sort[0][1] ? el.age - other.age : other.age - el.age
        );
        setPeople(newPeople);
        setSort([[people, !sort[0][1]], "age"]);
        break;
      case "city":
        console.log("city");
        newPeople.sort((el, other) =>
          sort[0][1]
            ? el.city > other.city
              ? -1
              : 1
            : el.city < other.city
            ? -1
            : 1
        );
        setPeople(newPeople);
        setSort([[people, !sort[0][1]], "city"]);
        break;
    }
  };

  return (
    <div>
      <div className="flex flex-col items-center">
        <h1 className="text-xl">People</h1>
        <table className="text-center">
          <thead>
            <tr>
              <th>
                <button
                  onClick={(e) => handleSort(e.currentTarget.value)}
                  value="#"
                >
                  #
                </button>
              </th>
              <th>
                <button
                  onClick={(e) => handleSort(e.currentTarget.value)}
                  value="name"
                >
                  name
                </button>
              </th>
              <th>
                <button
                  onClick={(e) => handleSort(e.currentTarget.value)}
                  value="age"
                >
                  age
                </button>
              </th>
              <th>
                <button
                  onClick={(e) => handleSort(e.currentTarget.value)}
                  value="city"
                >
                  city
                </button>
              </th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {people.map((person: People) => (
              <tr key={person.id}>
                <td>{person.id}</td>
                <td>{person.name}</td>
                <td>{person.age}</td>
                <td>{person.city}</td>
                <td>
                  {editting[0] === true && editting[1] === person.id ? (
                    <button
                      className="defaultbtn bg-red-700"
                      onClick={() => setEditting([false, 0])}
                    >
                      Editting <span className="opacity-50">x</span>
                    </button>
                  ) : (
                    <button
                      className="defaultbtn bg-slate-700"
                      value={person.id}
                      onClick={(e) => toggleEdit(e.currentTarget.value)}
                    >
                      Edit
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PeopleList;
