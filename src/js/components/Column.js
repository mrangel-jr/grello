import React from 'react';
import {Droppable} from 'react-beautiful-dnd';
import Tasklist from './Tasklist';

export default class Column extends React.Component {
    render() {
        return (
            <div className="column-container">
                <h3 className="column-title">{this.props.column.title}</h3>
                <Droppable droppableId={this.props.column.id}>
                    {
                        (provider,snapshot) => (
                            <Tasklist 
                                provider={provider} 
                                tasks={this.props.tasks}
                                isDraggingOver={snapshot.isDraggingOver}/>
                        )
                    }
                </Droppable>
            </div>
        );
    }
}