import { useContext } from 'react'
import { CirclesContext } from '../../providers/CircleProvider'

const Task1 = () => {
  const { circles, handleCounter, handleDuplicate } = useContext(CirclesContext)
  return (
    <div className='flex flex-wrap items-center justify-center h-screen max-w-screen'>
      {circles.map(circle => (
        <div
          key={circle.id}
          className='flex flex-col items-start justify-start p-3 pb-0 rounded shadow-lg '
        >
          <div className='mx-auto avatar placeholder'>
            <div
              className='w-[10vw] mx-auto  rounded-full'
              style={{
                backgroundColor: circle.backgroundColor
              }}
            >
              <h2 className='text-3xl text-white'>{circle.counter}</h2>
            </div>
          </div>

          <div className='w-fit join'>
            <button
              className='w-fit btn join-item btn-outline'
              onClick={() => handleCounter(circle)}
            >
              Counter
            </button>
            <button
              className='w-fit join-item btn btn-primary'
              onClick={() => handleDuplicate(circle)}
            >
              Duplicate
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Task1
