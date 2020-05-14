import React from 'react';
import Item from '../Item/Item';
import './ItemList.css'

// function ItemList() {
//     const cards = data
//     .sort((a,b) => (a.Name < b.Name) ? -1 : (a.Name > b.Name) ? 1 : 0)
//     .map(( { Name, Image, Price, Completes }, i ) => {
//         return (
//             <Item 
//                 key = { i }
//                 name = { Name }
//                 image = { Image }
//                 price = { Price }
//                 completes = { Completes }
//             />
//         )
//     });

//     return (
//         <div className = "ItemList">
//             { cards }
//         </div>
//     );
// }

// export default ItemList;


class ItemList extends React.Component {
    render() {
        const filterText = this.props.filterText;
        const filtered = [];

        this.props.items.forEach(({ Name, Image, Price, Completes }, i) => {
            if (Name.toLowerCase().indexOf(filterText) === -1) {
                return;
            }
            filtered.push(
                <Item 
                    key = { i }
                    name = { Name }
                    image = { Image }
                    price = { Price }
                    completes = { Completes }
                />
            );
        })

    return (
        <div className = "ItemList">
            { filtered }
        </div>
    )};
}

export default ItemList;