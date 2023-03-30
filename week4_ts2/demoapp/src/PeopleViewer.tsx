import React from "react";
import { People } from "./types";

type props = {
  people: People[];
};

const PeopleViewer: React.FC<props> = ({ people }) => {
  return (
    <div>
      <h1>People</h1>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>name</th>
            <th>age</th>
            <th>city</th>
          </tr>
        </thead>
        <tbody>
          {people.map((person: People) => (
            <tr key={person.id}>
              <td>{person.id}</td>
              <td>{person.name}</td>
              <td>{person.age}</td>
              <td>{person.city}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PeopleViewer;
