import React from "react";

export default function Input(props) {
    let { tasks, addTasks, text, setText, dateVal, setDate  } = props;
    return (
        <div className="input-container">

                <input placeholder="Enter Your Task" className="text-input" maxLength={210} value={text} onChange={(e => {
                    setText(e.target.value);
            })}/> 
            <input type="date" className="date-input" value={dateVal} onChange={(e) => {
                setDate(e.target.value);
                }} />
            
            <button type="submit" onClick={(e) => {
                if (text == '' || dateVal == '') {
                    alert('Fill all values');
                }
                else {
                    e.preventDefault();
                    addTasks(text, dateVal); // Pass values directly
                }
}}>
Add</button>
        </div>
    )
}