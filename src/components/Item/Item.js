import React from 'react';
import { Link } from 'react-router-dom';
import './Item.css';

function Item(props) {
    const  { name, image, price, completes } = props
    return (
        <div>
            <div className="fossilHeader">
                <h3>{ name }</h3>
                { completes && 
                    <small>Part of: { completes }</small>
                }
            </div>
            <img src={`${process.env.PUBLIC_URL}/images/fossils/${ image }`} alt={`${ image }`} />
            <div className="price">{ price }</div>
            <hr />
        </div>
    )
}

export default Item;