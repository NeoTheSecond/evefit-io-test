import React from "react";
import "./Column.css";
import Workout from "./Workout";
import { Droppable } from "react-beautiful-dnd";

export default function Column({ column, handleAddEx }) {
    const today = new Date().toDateString();
    return (
        <div className="col-container">
            <h3 className="title">{column.title}</h3>
            <div className="tasklist">
                {today === column.id ? (
                    <h3 className="date-current">{column.date}</h3>
                ) : (
                    <h3 className="date">{column.date}</h3>
                )}
                <Droppable droppableId={column.id}>
                    {(provided) => (
                        <div
                            className="ex-container"
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                        >
                            {column.workouts.map((id, idx) => (
                                <Workout
                                    handleAddEx={handleAddEx}
                                    key={id}
                                    id={id}
                                    idx={idx}
                                    col={column}
                                />
                            ))}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </div>
        </div>
    );
}
