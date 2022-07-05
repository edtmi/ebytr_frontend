import { useContext } from 'react';
import TasksContext from '../../context/TasksContext';

const Selects = () => {
  const { handleChange } = useContext(TasksContext);
  return (
    <div>
      <select
        name="statusTask"
        onC={ handleChange }
      >
        <option>status</option>
        <option value="ready">pronto</option>
        <option value="progress">em andamento</option>
        <option value="pending">pendente</option>
      </select>
    </div>
  );
};

export default Selects;
