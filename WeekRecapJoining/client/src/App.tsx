
import './App.css'
import { useState } from 'react'
import { useQuery, gql } from '@apollo/client';

function App() {
  const [persons, setPersons] = useState([]);
  const getPersons = gql`
    query {
      people {
        id
        name
        age
      }
    }
  `;

  const displayPersons = () => {
    const { loading, error, data } = useQuery(getPersons);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;
    setPersons(data.people);
  }

  return (
      <div className="App">
        <h1>People</h1>
        {persons && persons.map((person: any) => (
          <div key={person.id}>
            <p>{person.name}</p>
            <p>{person.age}</p>
          </div>
        ))}
        <button onClick={displayPersons}>Get People</button>
      </div>
  )
}

export default App
