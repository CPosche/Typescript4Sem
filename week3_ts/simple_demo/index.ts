const helloWorld = (name: string): string => {
  return `Hello from ${name}`;
};
document.getElementById("root")!.innerHTML = helloWorld("TypeScript");

class Person {
  name: string;
  age: number;
  gender: string;
  constructor(name: string, age: number, gender: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}

const populate = (): Person[] => {
  let personArray: Person[] = [];
  const names = [
    "John",
    "Jane",
    "Bob",
    "Alice",
    "Joe",
    "Mary",
    "Tom",
    "Sue",
    "Mike",
    "Sarah",
  ];
  const genders = ["Male", "Female", "Other"];

  for (let i = 0; i < 10; i++) {
    let name = names[Math.floor(Math.random() * names.length)];
    let age = Math.floor(Math.random() * 100);
    let gender = genders[Math.floor(Math.random() * genders.length)];
    personArray.push(new Person(name, age, gender));
  }

  return personArray;
};

const people = populate();

const createTable = (people: Person[]): string => {
  let tableHtml =
    "<table><thead><tr><td>#</td><td>Name</td><td>Age</td><td>Gender</td></tr></thead><tbody>";
  people.map(
    (person, index) =>
      (tableHtml += `<tr><td>${index + 1}</td><td>${person.name}</td><td>${
        person.age
      }</td><td>${person.gender}</td></tr>`)
  );
  tableHtml += "</tbody></table>";
  return tableHtml;
};

let desc: boolean = false;

document.getElementById("root")!.innerHTML = createTable(people);

const sortByAge = (desc: boolean): void => {
  people.sort(desc ? (a, b) => b.age - a.age : (a, b) => a.age - b.age);
  document.getElementById("root")!.innerHTML = createTable(people);
  desc = !desc;
};
const btn = document.getElementById("btn")!;
btn.addEventListener("click", () => {
  sortByAge(desc);
});

enum color {
  Red,
  Green,
  Blue,
}

console.log(color.Red);
