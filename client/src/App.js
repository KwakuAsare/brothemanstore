// import React from 'react';
// import './App.css';
// import Banner from './components/banner';
// import StorePage from './components/storePage';
// import Table from './components/Table';

// function App() {
//   return (
//     <div >
//       <Banner />
//       <Table />
//       <StorePage />


//     </div>
//   );
// }

// export default App;


import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "./components/Table";
import Banner from "./components/banner"

export default function App() {
  const [products, setProducts] = useState([]);
  //using "fetch" to make a request to the fake store API
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);

  //grabing key value pair from JSON object response
  const columns = React.useMemo(
    () => [
      {
        Header: "Product Image",
        accessor: "image",
        Cell: ({ value }) => {
          return (
            <img
              alt="product"
              class="img-fluid img-rounded"
              width={200}
              src={value}
            />
          );
        }
      },
      {
        Header: "Product Title",
        accessor: "title" // accessor is the "key" in the data
      },
      {
        Header: "Product Price",
        accessor: "price"
      },
      {
        Header: "Product Description",
        accessor: "description"
      }
    ],
    []
  );
  return (
    <div className="App">
      <Banner />
      
      <Table columns={columns} data={products} />
    </div>
  );
}