import data from "./people.json";
import Person from "./main";

const getPeople = async (): Promise<Person[]> => {
  const response = new Promise<Person[]>((resolve, reject) => {
    resolve(
      data.map(
        (person) => new Person(person.name, person.age, person.occupation)
      )
    );
  });
  return response;
};

export { getPeople };
