import React from 'react';
import { Link } from 'react-router-dom';
import './Item.css';

function Item(props) {
    const  { name, image, price, completes } = props
    return (
        <div>
            <h3>{ name }</h3>
            <div><small>Part of: { completes }</small></div>
            <img src={`${process.env.PUBLIC_URL}/images/fossils/${ image }`} alt={`${ image }`} />
            <div>{ price }</div>
            <hr />
        </div>
    )
}

export default Item;