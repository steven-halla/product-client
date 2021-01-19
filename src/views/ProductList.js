// import React from 'react';
// import axios from 'axios';
// import { Link } from '@reach/router';

// export default props => {
//     const { removeFromDom } = props;
//     const deleteProduct = (productId) => {
//         axios.delete('http://localhost8071/api/product' + productId)
//             .then(res => {
//                 removeFromDom(productId)
//             })
//     }
//     return(
//         // check line 18 for proper routing
//         <div>
//             {props.product.map((product, index) =>{
//                 return <p key={index}>
//                     <Link to={"/product" + product._id}>
//                         {product.title}, {product.price}, {product.description}
//                     </Link>
//                     |
//                     <button onClick={(event)=>{deleteProduct(product._id)}}>
//                         Delete
//                     </button>
//                 </p>
//             })}
//         </div>
//     )
// }