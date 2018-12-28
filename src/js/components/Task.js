import React from 'react';
import {Draggable} from 'react-beautiful-dnd';
import Handle from "./Handle";

export default class Task extends React.Component {
    render() {
        return (
            <Draggable draggableId={this.props.task.id} index={this.props.index}>
                {
                    (provided,snapshot) => (
                        <div 
                            className={`task-container ${snapshot.isDragging && 'moving'}`} 
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            ref={provided.innerRef}
                        >
                            <Handle {...provided.dragHandleProps}/>
                            {this.props.task.content}
                        </div>
                    )
                }
                
            </Draggable>
        );
    }
}