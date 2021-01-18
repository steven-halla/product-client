import React, { useEffect, useState } from 'react'
import ProductForm from '../components/ProductForm';
import axios from 'axios';

export default () => {
//     const [ message, setMessage ] = useState("Loading...")
//     useEffect(()=>{
//         axios.get("http://localhost:8080/api")
//             .then(response=>setMessage(response.data.message))       
//     }, []);


    return (
        <ProductForm/>
    )
}