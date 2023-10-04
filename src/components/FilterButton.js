import React, { useState } from "react";
const FILTER_MAP = {
    All: () => true,
    Active: (task) => !task.completed,
    Completed: (task) => task.completed,
  };
const FILTER_NAMES = Object.keys(FILTER_MAP);

function FilterButton(props) {
    const [filter, setFilter] = useState("All");
    return (
      <button
        type="button"
        className="btn toggle-btn"
        aria-pressed={props.isPressed}
        onClick={() => props.setFilter(props.name)}>
        <span className="visually-hidden">Show </span>
        <span>{props.name}</span>
        <span className="visually-hidden"> tasks</span>
      </button>
    );
  }
  

export default FilterButton;
