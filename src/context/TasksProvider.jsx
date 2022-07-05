import { useState } from 'react';
import TasksContext from './TasksContext';

const TasksProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [objectsTask, setObjectsTask] = useState(
    {
      id: 0,
      task: '',
      statusTask: 'status',
    }
  );
  
  const createTask = () => {
    const { task, statusTask } = objectsTask;
    setTasks([...tasks, { id: tasks.length, task, statusTask }]);
  };

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setObjectsTask({
      ...objectsTask,
      [name]: value ,
    });
  };

  const context = {
    objectsTask,
    handleChange,
    createTask,
  }

  return (
    <TasksContext.Provider value={ context }>
      {children}
    </TasksContext.Provider>
  );
};

export default TasksProvider;
