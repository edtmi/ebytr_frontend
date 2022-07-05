import { useContext } from 'react';
import TasksContext from '../../context/TasksContext';

const Input = () => {
  const { handleChange } = useContext(TasksContext);
  return (
    <div>
      <input
        name='task'
        onChange={ handleChange }
        placeholder="Digite uma tarefa ..."
        type="text"
      />
    </div>
  );
};

export default Input;
