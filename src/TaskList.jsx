import React from 'react';

export default function TaskList(props) {
    let { tasks } = props;
    return (
        <div className='task-list'>
            {tasks.map((e, index) => (
                <div className='task-value'>
                    <p className='task-date' key={index}>{e.date}</p>
                    <div className='task-content'>
                        <p className="task-text" key={index}>{e.text}</p>
                            <input type="checkbox" className='done' />
                    </div>
                </div>// Access text and date
            ))}
        </div>
    );
}
