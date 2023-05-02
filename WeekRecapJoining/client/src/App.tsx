import "./App.css";
import { useLazyQuery, gql } from "@apollo/client";

function App() {
  const getPersons = gql`
    query {
      people {
        id
        name
        age
        email
      }
    }
  `;

  const displayPersons = () => {
    const [getPeople, { loading, error, data }] = useLazyQuery(getPersons);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;

    return (
      <div>
        <button onClick={() => getPeople()}>Get People</button>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.people.map((person: any) => (
                <tr key={person.id}>
                  <td>{person.name}</td>
                  <td>{person.age}</td>
                  <td>{person.email}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <div className="App">
      <h1>People</h1>
      {displayPersons()}
    </div>
  );
}

export default App;
