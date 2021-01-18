import React from 'react';
import axios from 'axios';
import { Link } from '@reach/router';



const ProductView = (props) => {
    return(
        <div>
            {props.product.map((p, index)=>
                 <Link to={`/product/${p._id}`}><p key={index}> {p.title}</p></Link>
            )}
        </div>
    )
}

export default ProductView;