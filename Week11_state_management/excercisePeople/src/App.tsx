import "./App.css";
import HeadersFC from "./components/HeadersFC";
import RowFC from "./components/RowFC";
import Table from "./components/Table";
import { Car, Person, Monkey } from "./utils/types";

function App() {
  const people: Person[] = [
    { id: 1, name: "Helle", age: 20 },
    { id: 2, name: "Ib", age: 30 },
    { id: 3, name: "Bodil", age: 40 },
    { id: 4, name: "Yasmin", age: 32 },
  ];

  const cars: Car[] = [
    {
      id: 1,
      make: "Volvo",
      model: "B18",
      year: 2000,
      color: "red",
      price: 20000,
    },
    {
      id: 2,
      make: "Toyota",
      model: "Corolla",
      year: 2001,
      color: "blue",
      price: 30000,
    },
    {
      id: 3,
      make: "VW",
      model: "Golf",
      year: 2002,
      color: "green",
      price: 40000,
    },
    {
      id: 4,
      make: "BMW",
      model: "M3",
      year: 2003,
      color: "yellow",
      price: 50000,
    },
  ];

  const monkeys: Monkey[] = [
    { id: 1, name: "Hess" },
    { id: 2, name: "Hartmann" },
  ];

  function generateHeaders<T extends Object>(data: T[], name: string) {
    const headers = Object.keys(data[0]) as (keyof T)[];
    console.log(headers);
    let dataAsString: string[] = [];
    headers.map((header) => {
      if (header === "id") {
        dataAsString.push("#");
      } else {
        dataAsString.push(header.toString());
      }
    });
    const headersFC = <HeadersFC headers={dataAsString} name={name} />;
    return headersFC;
  }

  function generateRows<T extends Object>(data: T[]) {
    let rows: string[] = [];
    let row: JSX.Element[] = [];
    data.map((d) => {
      rows = Object.values(d) as string[];
      row.push(<RowFC row={rows} />);
    });
    return row;
  }

  return (
    <div
      className="App"
      style={{ display: "flex", gap: "100px", fontSize: "36px" }}
    >
      <div>
        <Table
          headers={generateHeaders(people, "People")}
          rows={generateRows(people)}
        />
      </div>
      <div>
        <Table
          headers={generateHeaders(cars, "Cars")}
          rows={generateRows(cars)}
        />
      </div>
      <div>
        <Table
          headers={generateHeaders(monkeys, "Monkeys")}
          rows={generateRows(monkeys)}
        />
      </div>
    </div>
  );
}

export default App;
