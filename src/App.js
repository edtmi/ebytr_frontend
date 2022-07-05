import TasksProvider from './context/TasksProvider';
import Tasks from './pages/Tasks';

function App() {
  return (
    <div className="App">
      <TasksProvider>
        <Tasks />
      </TasksProvider>
    </div>
  );
}

export default App;
