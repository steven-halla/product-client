import React, { useEffect, useState } from 'react'
// import ProductVew from '../components/ProductView';
import axios from 'axios';
import { Link } from '@reach/router';


export default props => {
    const [product, setProduct] = useState({})
    useEffect(() => {
        axios.get("http://localhost:8071/api/product/" + props.id)
            .then(res => {
                console.log(res)
                setProduct(res.data)})

    }, [])
    return (
        <div>
            <p>Title: {product.title}</p>
            <p>Price: {product.price}</p>
            <p>Description: {product.description}</p>
            <Link to={"/product/" + product._id + "/edit"} >
                Edit 
            </Link>

        </div>
    )
    
}