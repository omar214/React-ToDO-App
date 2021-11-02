import React from 'react';


const ListItems = (props)=> {
    const {items , handleDelete } = props
     
    if(items.length ==0) {
        var listItems = (
            <p> No items Found</p>
        )
    }
    else {
        var listItems= items.map(item => {
            return (
                <div key={item.id}>
                    <span> {item.name}</span>
                    <span> {item.age}</span>
                    <span onClick={ ()=> handleDelete(item.id)}> &times;   </span>
                </div>
            )
        })         
    }
    return (
        <div className="listItems">
            <div>
                <span> name </span>
                <span> Age</span>
                <span > Action   </span>  
            </div>
            { listItems }
        </div>
    )
}

export default  ListItems
