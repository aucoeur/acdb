import React from 'react';
import './ItemList.css';
import Item from '../Item/Item';
import data from '../../data/NH-fossils.json';

function ItemList() {
    const cards = data.map(( { Name, Image, Price, Completes }, i ) => {
        return (
            <Item 
                key = { i }
                name = { Name }
                image = { Image }
                price = { Price }
                completes = { Completes }
            />
        )
    })
    
    return (
        <div className = "ItemList">
            { cards }
        </div>
    )
}

export default ItemList;