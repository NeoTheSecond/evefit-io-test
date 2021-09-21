import "./App.css";
import initialData from "./data";
import Column from "./Column";
import { DragDropContext } from "react-beautiful-dnd";
import { useState, useReducer } from "react";

function App() {
    const [data, setData] = useState(initialData);
    const [, forceUpdate] = useReducer((x) => x + 1, 0); // This is just a hack for forcing component to rerender
    const handleDragEnd = (result) => {
        const { destination, source, draggableId } = result;
        if (!destination) {
            return;
        }
        if (
            destination.droppableId === source.droppableId &&
            destination.index === source.index
        ) {
            return;
        }
        const start = data.columns.find((el) => el.id === source.droppableId);
        const finish = data.columns.find(
            (el) => el.id === destination.droppableId
        );
        if (start === finish) {
            const newWorkoutIds = Array.from(start.workouts);
            newWorkoutIds.splice(source.index, 1);
            newWorkoutIds.splice(destination.index, 0, draggableId);
            const newColumn = {
                ...start,
                workouts: newWorkoutIds,
            };
            let newState = data;
            newState = {
                ...data,
                columns: [
                    ...data.columns.filter((col) => col.id !== newColumn.id),
                    newColumn,
                ],
            };
            setData(newState);
            return;
        }
        const startWorkoutIds = Array.from(start.workouts);
        startWorkoutIds.splice(source.index, 1);
        const newStart = {
            ...start,
            workouts: startWorkoutIds,
        };
        const finishWorkoutIds = Array.from(finish.workouts);
        finishWorkoutIds.splice(destination.index, 0, draggableId);
        const newFinish = {
            ...finish,
            workouts: finishWorkoutIds,
        };
        let newState = data;
        newState = {
            ...data,
            columns: [
                ...data.columns.filter(
                    (col) => col.id !== newStart.id && col.id !== newFinish.id
                ),
                newStart,
                newFinish,
            ],
        };
        setData(newState);
    };

    const handleAddEx = (newWorkout) => {
        let newData = data;
        newData.workouts[newWorkout.id] = newWorkout;
        setData(newData);
        forceUpdate();
    };

    return (
        <div className="App-container">
            <DragDropContext onDragEnd={handleDragEnd}>
                <div className="App">
                    {data.columnOrder.map((colId) => {
                        const column = data.columns.find(
                            (el) => el.id === colId
                        );
                        return (
                            <Column
                                key={colId}
                                column={column}
                                handleAddEx={handleAddEx}
                            />
                        );
                    })}
                </div>
            </DragDropContext>
        </div>
    );
}

export default App;
