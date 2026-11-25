import { useState } from "react";

function TaskItem({ task, deleteTask, toggleTask, updateTask }) {
    const [isEditing, setIsEditing] = useState(false);
    const [newTitle, setNewTitle] = useState(task.title);

    function handleSave() {
        if (newTitle.trim() === '') return;
        updateTask(task.id, newTitle);
        setIsEditing(false);
    }

    return (
        <div className="task-item">
            {isEditing ? (
                <>
                    <input type="text"
                        value={newTitle}
                        onChange={e => setNewTitle(e.target.value)}
                    />
                    <button onClick={handleSave}>Сохранить</button>
                    <button onClick={() => {
                        setNewTitle(task.title);
                        setIsEditing(false);
                    }}>Отменить</button>
                </>
                ) : (
                <>
                    <div>
                        <span className={task.completed ? 'completed' : ""}>
                            {task.title}
                        </span> &nbsp;
                        <b className={`priority ${task.priority}`}>
                            {task.priority}
                        </b>
                    </div>
                    <div>
                        <button onClick={() => setIsEditing(true)}>Изменить</button>
                        <button onClick={() => toggleTask(task.id)}>
                            {task.completed ? 'Вернуть' : 'Готово'}
                        </button>
                        <button onClick={() => deleteTask(task.id)}>
                            Удалить
                        </button>
                    </div>
                </>
            )}
        </div>
    )
}

export default TaskItem;