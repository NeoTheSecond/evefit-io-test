import React from "react";
import data from "./data";
import { Draggable } from "react-beautiful-dnd";

import "./Workout.css";

export default function Workout({ id, idx, col, handleAddEx }) {
    const workout = data.workouts[id];
    const { exercises, name } = workout;

    const handleAdd = () => {
        const newEx = {
            name: "Exercise E",
            info: "50 lb x 5",
            sets: 1,
        };
        const newWorkout = {
            ...workout,
            exercises: [...workout.exercises, newEx],
        };
        handleAddEx(newWorkout);
    };

    return (
        <Draggable draggableId={id} index={idx}>
            {(provided) => (
                <div
                    className="workout-container"
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                >
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                        }}
                    >
                        <p className="workout-name">{name}</p>
                        <div className="horizontal-dots" />
                    </div>
                    {exercises.map((el, idx) => (
                        <div key={idx} className="exercise-container">
                            <div className="ex-name-container">
                                <p className="ex-name">{el.name}</p>
                            </div>
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                }}
                            >
                                <span className="sets-count">{el.sets}x</span>
                                <span className="ex-info">{el.info}</span>
                            </div>
                        </div>
                    ))}
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "row-reverse",
                        }}
                    >
                        <button className="add-ex-btn" onClick={handleAdd}>
                            +
                        </button>
                    </div>
                </div>
            )}
        </Draggable>
    );
}
