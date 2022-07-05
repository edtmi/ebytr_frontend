import { useContext } from 'react';
import TasksContext from '../../context/TasksContext';

const Buttons = () => {
  const { createTask } = useContext(TasksContext);
  return (
    <div>
      <button
        onClick={ createTask }
      >Cadastrar</button>
      <button>Atualizar</button>
    </div>
  );
};

export default Buttons;
