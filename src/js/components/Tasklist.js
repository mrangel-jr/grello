import React from 'react';
import Task from './Task';

export default class Tasklist extends React.Component {
    render() {
        const {provider, isDraggingOver} = this.props;
        return (
            <div 
                className={`tasklist-container ${isDraggingOver && 'selected'}`}
                ref={provider.innerRef}
                {...provider.droppableProps}
            >
                {
                    this.props.tasks.map((task, index) => 
                    <Task key={task.id} task={task} index={index}/>)
                }
                {provider.placeholder}
            </div>
        )
    }
}