import React, {Component} from  'react';
import {DragDropContext} from 'react-beautiful-dnd';
/*My Components*/
import Column from './Column';
import AddColumn from './AddColumn';

/*Data*/

class CardBoard extends Component {
    constructor(props) {
        super(props);
        this.state = this.props.initialData;
    }

    addColumn = () => {
        const length = this.state.columnOrder.length+1;
        const nameColumn = "column-"+length;
        const newColumn = {
            id: nameColumn,
            title: 'One more '+length,
            tasksIds: [],
        }
        const newState = {
            ...this.state,
            columns: {
                ...this.state.columns,
                [newColumn.id]:newColumn,
            },
            columnOrder: [
                ...this.state.columnOrder,
                newColumn.id
            ]
        };

        console.log(newState);
        this.setState(newState);
        
    }

    onDragStart = () => {
        document.body.style.color = 'orange';
    }

    onDragEnd = result => {
        document.body.style.color = 'inherit';

        const {source, destination, draggableId} = result;

        if(!destination) {
            return;
        }

        if (
            destination.droppableId === source.droppableId &&
            destination.index === source.index
        ) {
            return;
        }

        const columnSource = this.state.columns[source.droppableId];
        const newTaskSource = Array.from(columnSource.tasksIds);
        const columnDestination = this.state.columns[destination.droppableId];
        const newTaskDestination = source.droppableId === destination.droppableId ? newTaskSource : Array.from(columnDestination.tasksIds);
        //Remove item
        newTaskSource.splice(source.index,1);
        //Insert item
        newTaskDestination.splice(destination.index,0,draggableId);

        const newColumnSource = {
            ...columnSource,
            tasksIds: newTaskSource,
        }

        const newColumnDestination = {
            ...columnDestination,
            tasksIds: newTaskDestination,
        }

        let newState = {
            ...this.state,
            columns: {
                ...this.state.columns,
                [newColumnDestination.id]:newColumnDestination
            }
        }

        if ( newColumnSource.id !== newColumnDestination.id) {
            newState = {
                ...this.state,
                columns: {
                    ...this.state.columns,
                    [newColumnSource.id]:newColumnSource,
                    [newColumnDestination.id]:newColumnDestination
                },
            };
        }

        this.setState(newState);
    }

    render() {
        return (
            <DragDropContext 
                onDragStart={this.onDragStart}
                onDragEnd={this.onDragEnd}>
                <div className='screenboard-container'>
                    {
                        Object.keys(this.state.columns).map(columnId => {
                            const column = this.state.columns[columnId];
                            const tasks = column.tasksIds.map(taskId => 
                                this.state.tasks[taskId]
                            );
                            return <Column key={column.id} column={column} tasks={tasks}/>;
                        })
                    }
                    <AddColumn onClick={this.addColumn}/>
                </div>
            </DragDropContext>
        )
    }
}

export default CardBoard;