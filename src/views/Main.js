import React, { useEffect, useState } from 'react';
import ProductForm from '../components/ProductForm';
import ProductView from '../components/ProductView';
import axios from 'axios';

export default () => {
    const [product, setProduct] = useState([]);
    const [loaded, setLoaded] = useState(false);
    useEffect(()=>{
        axios.get('http://localhost:8071/api/product')
            .then(res=>{
                setProduct(res.data);
                setLoaded(true);
            });
    },[])
    const removeFromDom = productId => {
        setProduct(product.filter(product => product._id != productId));
    }
    return (
        <div>
            <ProductForm/>
            <hr/>
            {loaded && <ProductView product={product} removeFromDom={removeFromDom} />}
        </div>
    )
}





// import React, { useEffect, useState } from 'react';
// import ProductForm from '../components/ProductForm';
// import ProductView from '../components/ProductView';
// import axios from 'axios';

// export default () => {

//     const [product, setProduct] = useState([]);
//     // const [loaded, setLoaded] = useState(false);

//     //use effect to make an API call
//     useEffect(()=>{
//         axios.get('http://localhost:8080/api/product')
//         .then(res=>setProduct(res.data))
//         .catch(err=>console.log("error: ", err))
//     }, [] )

//     return (
//         <>
//             <ProductForm/>
//             <ProductView product={product}/>
//         </>
//     )
// }