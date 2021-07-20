import React, { useState, useEffect, useRef } from 'react'
import { getList, setItem } from '../Services/list';

const Product = () => {
    const [list, setList] = useState([]);
    const [inputProduct, setInputProduct] = useState('');
    const [alert, setAlert] = useState(false);
    let mounted = useRef(true);

    console.log('mounted', mounted);
    useEffect(() => {
        mounted.current = true;
        if (list.length && !alert) {
            return;
        }

        getList().then(items => {
            if (mounted.current) {
                setList(items);
            }
        });

        return () => mounted.current = false;
    }, [alert, list]);

    useEffect(() => {
        if (alert) {
            if (mounted.current) {
                setTimeout(() => setAlert(false), 1000);
            }
        }
    }, [alert]) // componentDidMount, componentDidUpdate , ComponentUnmount

    const handleSubmit = (e) => {
        e.preventDefault();
        setItem(inputProduct).then(() => {
            if (mounted.current) {
                setAlert(true);
                setInputProduct('');
            }
        });

    }

    return (
        <div className="wrapper">
            <h1>Product list</h1>
            <ul>
                {
                    list.map((item, i) => <li key={i} >{item.item}</li>)
                }
            </ul>
            {alert && <h2>Submit SuccessFul </h2>}
            <form onSubmit={handleSubmit}>
                <label>
                    <p>New Product</p>
                    <input type="text" onChange={e => setInputProduct(e.target.value)} value={inputProduct} />
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Product
