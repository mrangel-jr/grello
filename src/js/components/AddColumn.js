import React from 'react';

const AddColumn = (props) => {
    return (
        <div className="column-container">
            <a className="addcolumn-title" onClick={props.onClick}>
                <i className="fas fa-plus"/>
                <p>Add new list</p>
            </a>
        </div>
    )
}

export default AddColumn;