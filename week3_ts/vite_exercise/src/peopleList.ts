import Person from "./main";

const renderPeopleList = (
  container: HTMLDivElement,
  peopleList: Person[]
): void => {
  peopleList.map((person) => {
    const personDiv = document.createElement("div");
    const personH2 = document.createElement("h2");
    const personP1 = document.createElement("p");
    const personP2 = document.createElement("p");
    const personP3 = document.createElement("p");
    personH2.innerText = person.name;
    personP1.innerText = person.age.toLocaleString();
    personP2.innerText = person.occupation;
    personP3.innerText = person.getSalery().toLocaleString();
    personDiv.appendChild(personH2);
    personDiv.appendChild(personP1);
    personDiv.appendChild(personP2);
    personDiv.appendChild(personP3);
    container.appendChild(personDiv);
  });
};

export default renderPeopleList;
