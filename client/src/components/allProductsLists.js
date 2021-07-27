// import React from "react";

// function  AllProductList(props) {
//   return (
//     <table className="table">
//       <thead>
//         <tr>
//         <th scope="col">Image</th>
//                     <th scope="col">ID</th>
//                     <th scope="col" onClick={props.handleSorting}>Title</th>
//                     <th scope="col">Price</th>
//                     <th scope="col">Category</th>
//         </tr>
//       </thead>

//       <tbody>
//                 {props.results.map(result =>
//                     <tr>
//                         <th scope="row"><img alt={result.title} className="img-fluid" src={result.image} /></th>
//                         <td>{result.ID}</td>
//                         <td>{result.title}</td>
//                         <td> {result.price} </td>
//                         <td> {result.category} </td>
//                     </tr>
//                 )}
//             </tbody>

//     </table>
//   )
// }

// export default AllProductList