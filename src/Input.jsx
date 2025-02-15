import React from "react";

export default function Input() {
    return (
        <div className="input-container">
            <input placeholder="Enter Your Task" className="text-input" />
            <input type="date" className="date-input" />
            <button>Add</button>
        </div>
    )
}