import React, {useState} from 'react';
import axios from 'axios';

export default () => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const onSubmitHandler = event => {
        event.preventDefault();
        axios.post('http://localhost:8080/api/product', {
            title,
            price,
            description
        })
        .then(res=>console.log(res))
        .catch(err=>console.log(err))
    }
    return(
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>Title</label>
                <input type="text" onChange={event=>setTitle(event.target.value)}/>
            </p>
            <p>
                <label>Price</label>
                <input type="number" onChange={event=>setPrice(event.target.value)}/>
            </p>
            <p>
                <label>Description</label>
                <input type="text" onChange={event=>setDescription(event.target.value)}/>
            </p>
            <input type="submit"/>
        </form>
    )
}