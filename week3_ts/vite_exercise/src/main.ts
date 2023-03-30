import { getPeople } from "./people";
import renderPeopleList from "./peopleList";

export default class Person {
  name: string;
  age: number;
  occupation: string;
  private_salery: number;

  constructor(
    name: string,
    age: number,
    occupation: string,
    private_salery: number = 0
  ) {
    this.name = name;
    this.age = age;
    this.occupation = occupation;
    this.private_salery = private_salery;
  }

  introduce(): string {
    return `Hello, my name is ${this.name}, I am ${this.age} years old, and I am a ${this.occupation}.`;
  }

  incrementAge(): void {
    this.age++;
  }

  setSalery(salery: number): void {
    this.private_salery = salery;
  }

  getSalery(): number {
    return this.private_salery;
  }
}

const john = new Person("John Smith", 30, "software developer");
console.log(john.introduce()); // "Hello, my name is John Smith and I am a software developer. I earn 0$"
console.log(john.age); // 30
john.incrementAge();
console.log(john.age); // 31
john.setSalery(1000);
console.log(john.getSalery()); // 1000
console.log(john.introduce());
console.log();

const awaitRender = async (): Promise<void> => {
  const peopleList = await getPeople();
  console.log(peopleList);
  renderPeopleList(
    document.getElementById("app") as HTMLDivElement,
    peopleList
  );
};

awaitRender();
