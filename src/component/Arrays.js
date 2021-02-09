import React from 'react';


// function ListComponent(props) {
//     const listItems = myList.map((item) =>
//       <li>{item}</li>
//     );
//     return (
//       <ul>{listItems}</ul>
//     );
//   }

//   const myList = ["apple", "orange", "strawberry", "blueberry", "avocado"];

function ListComponent(props) {
    const listItems = myList.map((item) =>
        <li key={item.id}>
            {item.value}
        </li>
    );
    return (
        <diV className='App'>
            <br/><br/>
        <b>{listItems}</b>
        </diV>
        );
}

const myList = [{ id: 'a', value: 'Apple' },
{ id: 'b', value: 'Orange' },
{ id: 'c', value: 'Strawberry' },
{ id: 'd', value: 'Blueberry' },
{ id: 'e', value: 'Avocado' },
{ id: 'f', value: 'M Here' },
{ id: 'g', value: 'M Also' }];

export default ListComponent
