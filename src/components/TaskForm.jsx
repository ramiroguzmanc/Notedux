import { useState } from 'react'
import { useDispatch } from 'react-redux'
import uuid from 'react-uuid'
import { addTask } from '../features/tasks/taskSlice'

const TaskForm = () => {
  const [task, setTask] = useState({
    id: uuid(),
    title: '',
    description: '',
    important: false
  })

  const dispatch = useDispatch()

  const handleInputChange = ev => {
    setTask({
      ...task,
      [ev.target.name]: ev.target.value
    })
  }

  const handleTaskSubmit = (ev) => {
    ev.preventDefault()
    dispatch(addTask(task))
  }

  return (
    <form onSubmit={handleTaskSubmit}>
      <div className='mb-5'>
        <input type='text' name='title' placeholder='Task Title' onChange={handleInputChange} className='p-2 rounded w-96' required />
      </div>
      <div>
        <textarea type='text' name='description' placeholder='Task Description' onChange={handleInputChange} className='p-2 mb-1 rounded w-96 h-32' required />
      </div>
      <div className='flex justify-center'>
        <input type='checkbox' name='important' />
        <p className='my-4 mx-2'>Important?</p>
      </div>
      <button className='border rounded-lg px-4 py-1.5 bg-opacity-5 bg-white'>Guardar</button>
    </form>
  )
}

export default TaskForm
