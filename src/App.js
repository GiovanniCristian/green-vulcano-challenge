import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Table from "./Table";

const getData = () => [

{
  id: 4610,
  model: "ItemModel01",
  location: "Via Tal dei Tali, 23 - Roma - 00100",
  creation_date: "2022-05-14 | 12:30",
  battery_prc: 95,
  fuel_prc: 100,
  damage: 5,
},
{
  id: 4611,
  model: "ItemModel02",
  location: "Via Tal dei Tali, 24 - Roma - 00100",
  creation_date: "2022-05-15 | 16:55",
  battery_prc: 46,
  fuel_prc: 50,
  damage: null
},
{
  id: 4612,
  model: "ItemModel03",
  location: "Via Tal dei Tali, 25 - Roma - 00100",
  creation_date: "2022-05-16 | 22:11",
  battery_prc: 17,
  fuel_prc: 25,
  damage: 3,
},
{
  id: 4613,
  model: "ItemModel04",
  location: "Via Tal dei Tali, 26 - Roma - 00100",
  creation_date: "2022-05-17 | 23:34",
  battery_prc: 10,
  fuel_prc: 20,
  damage: null
},
{
  id: 4614,
  model: "ItemModel05",
  location: "Via Tal dei Tali, 27 - Roma - 00100",
  creation_date: "2022-05-18 | 03:59",
  battery_prc: 83,
  fuel_prc: 5,
  damage: null
},
{
  id: 4615,
  model: "ItemModel06",
  location: "Via Tal dei Tali, 28 - Roma - 00100",
  creation_date: "2022-05-19 | 02:54",
  battery_prc: 32,
  fuel_prc: 40,
  damage: null
},
{
  id: 4616,
  model: "ItemModel07",
  location: "Via Tal dei Tali, 29 - Roma - 00100",
  creation_date: "2022-05-17 | 23:34",
  battery_prc: 36,
  fuel_prc: 15,
  damage: 2,
},
{
  id: 4617,
  model: "ItemModel08",
  location: "Via Tal dei Tali, 30 - Roma - 00100",
  creation_date: "2022-05-20 | 18:22",
  battery_prc: 76,
  fuel_prc: 35,
  damage: 1,
},
{
  id: 4618,
  model: "ItemModel09",
  location: "Via Tal dei Tali, 31 - Roma - 00100",
  creation_date: "2022-05-16 | 22:11",
  battery_prc: 5,
  fuel_prc: 15,
  damage: 8,
},
{
  id: 4619,
  model: "ItemModel10",
  location: "Via Tal dei Tali, 32 - Roma - 00100",
  creation_date: "2022-05-13 | 01:43",
  battery_prc: 65,
  fuel_prc: 35,
  damage: null
},
{
  id: 4620,
  model: "ItemModel11",
  location: "Via Tal dei Tali, 33 - Roma - 00100",
  creation_date: "2022-05-16 | 22:11",
  battery_prc: 1,
  fuel_prc: 13,
  damage: 9,
},
]

function App() {
  const columns = React.useMemo(
    () => [
      {
        Header: "Id",
        accessor: "id",
      },
      {
        Header: "Model",
        accessor: "model",
      },
      {
        Header: "Location",
        accessor: "location",
      },
      {
        Header: "Creation Date",
        accessor: "creation_date",
      },
      {
        Header: "Battery Health",
        accessor: "battery_prc",
      },
      {
        Header: "Fuel",
        accessor: "fuel_prc",
      },
      {
        Header: "Damage",
        accessor: "damage",
      },
    ],
    []
  );

  const data = React.useMemo(() => getData(), []);

  return (
      <div>
        <Table columns={columns} data={data} />
      </div>
  );
}

export default App;