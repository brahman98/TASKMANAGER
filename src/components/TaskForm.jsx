import { useState } from "react";

function TaskForm( { addTask } ){
    const [title, setTitle] = useState('');
    const [priority, setPriority] = useState('Средний');
    function handleSubmit(e) {
        e.preventDefault();
        if (title.trim() === '') return;
        addTask(title, priority);
        setTitle('');
    }

    return (
        <form onSubmit={handleSubmit} className="task-form">
            <input 
                type="text"
                placeholder="Какая новая задача?"
                value={title}
                onChange={e => setTitle(e.target.value)} />
            <select value={priority} onChange={e => setPriority(e.target.value)}>
                <option value="Низкий">Низкий</option>
                <option value="Средний">Средний</option>
                <option value="Высокий">Высокий</option>
            </select>
            <button type="submit">Добавить</button>
        </form>
    )
}

export default TaskForm;
