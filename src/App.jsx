import './App.css'
import TaskForm from './components/TaskForm'
import TasksList from './components/TasksList'

function App () {
  return (
    <div className='App'>
      <h1 className='font-bold text-3xl mb-16'>Redux Toolkit con Fazt</h1>
      <TaskForm />
      <TasksList />
    </div>
  )
}

export default App
