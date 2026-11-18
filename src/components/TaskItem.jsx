function TaskItem({ task, deleteTask, toggleTask }){
    return (
        <div className="task-item">
            <span className={task.completed ? 'completed' : ''}>
                {task.title}
            </span>
            <div>
                <button onClick={() => toggleTask(task.id)}>
                    {task.completed ? 'Вернуть' : 'Готово'}
                </button>
                <button onClick={() => deleteTask(task.id)}>
                    Удалить
                </button>
            </div>
        </div>
    )
}

export default TaskItem;