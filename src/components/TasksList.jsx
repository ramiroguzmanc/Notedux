import { useSelector } from 'react-redux'

const TasksList = () => {
  const tasksList = useSelector(state => state.tasks)

  return (
    <section>
      {tasksList?.map(task => (
        <div key={task.id} className='bg-white mx-auto max-w-lg rounded-lg p-6 text-black m-5'>
          <h1 className='text-3xl font-bold'>{task.title}</h1>
          <p className='text-start'>{task.description}</p>
        </div>
      ))}

    </section>
  )
}

export default TasksList
