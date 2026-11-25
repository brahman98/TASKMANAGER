import TaskItem from './TaskItem';

function TaskList({ tasks, deleteTask, toggleTask, updateTask }){
    if (tasks.length === 0) {
        return <p>Задач пока нет</p>
    }
    return (
        <div className="task-list">
            {tasks.map(task => (
                <TaskItem
                    key={task.id}
                    task={task}
                    deleteTask={deleteTask}
                    toggleTask={toggleTask}
                    updateTask={updateTask}
                />
            ))}
        </div>
    );
}

export default TaskList;