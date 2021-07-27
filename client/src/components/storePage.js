// import React, { Component } from "react";
// import ProductSearch from "./productSearch";
// import AllProductsList from "./allProductsLists"
// import API from "../utils/API";

// class StorePage extends Component {
//     state = {
//         search: "",
//         results: [],
//         asc: true
//     }

//     componentDidMount() {
//         this.searchEmp("");
//         //Axios.get
//     };

//     searchEmp = query => {
//         API.search(query)
//         .then(res => this.setState({ results: res.data.results}))
//         .catch(err => console.log(err));
//     };
    
//     handleInputChange = event => {
//         const name  = event.target.name;
//         const value = event.target.value;
//         this.setState({
//             [name]: value
//         });
//     };

//     handleFormSubmit = event => {
//         event.preventDefault();
//         this.searchEmp(this.state.search);
//     };

//     handleSorting = () => {
//         this.setState({
//                 asc: !this.state.asc
//               })
            
//     }

//     render() {

//        const filteredres = this.state.results.filter((result) => {
//             console.log(result);
//             if (result.name.first.includes(this.state.search)) {
//                 return true
//             } 
//             return false;
//         })
//         //add sorting here
//         return(
//             <div>
//         <ProductSearch
//           search={this.state.search}
//           handleFormSubmit={this.handleFormSubmit}
//           handleInputChange={this.handleInputChange}
//         />
//         <AllProductsList results={filteredres} handleSorting={this.handleSorting} />
//       </div>
//         )
//     }
// }

// export default StorePage;

// import React, { useEffect, useState } from "react";
// import Table from "./components/Table";
// export default function App() {
//   const [products, setProducts] = useState([]);
//   useEffect(() => {
//     fetch("https://fakestoreapi.com/products")
//       .then((res) => res.json())
//       .then((json) => setProducts(json));
//   }, []);
//   const columns = React.useMemo(
//     () => [
//       {
//         Header: "Product Image",
//         accessor: "image",
//         Cell: ({ value }) => {
//           return (
//             <img
//               alt="product"
//               class="img-fluid img-rounded"
//               width={200}
//               src={value}
//             />
//           );
//         }
//       },
//       {
//         Header: "Product Title",
//         accessor: "title" // accessor is the "key" in the data
//       },
//       {
//         Header: "Product Price",
//         accessor: "price"
//       },
//       {
//         Header: "Product Description",
//         accessor: "description"
//       }
//     ],
//     []
//   );
//   return (
//     <div className="App">
//       <h1>Example of React table with FakeStore API</h1>
//       <Table columns={columns} data={products} />
//     </div>
//   );
// }

