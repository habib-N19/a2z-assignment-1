import { useState } from 'react'

const Task1 = () => {
  const [circles, setCircles] = useState([
    { id: 1, backgroundColor: '#FFFF00', counter: 0 }
  ])
  const randomColor = () => {
    const char = 'ABCDEF0123456789'
    let color = '#'
    for (let i = 0; i < 6; i++) {
      color += char[Math.floor(Math.random() * 16)]
    }
    // console.log(color)
    return color
  }
  const handleCounter = circle => {
    setCircles(preCircles => {
      return preCircles.map(c => {
        if (c.id === circle.id) {
          return {
            ...c,
            backgroundColor: randomColor(),
            counter: c.counter + 1
          }
        }
        return c
      })
    })
  }
  const handleDuplicate = circle => {
    if (circles.length < 10) {
      const newCircle = {
        ...circle,
        id: circles.length + 1,
        counter: 0
      }
      setCircles(prevCircles => [...prevCircles, newCircle])
    }
  }
  return (
    <div className='flex flex-wrap items-center justify-center w-screen h-screen'>
      {circles.map(circle => (
        <div key={circle.id} className='flex flex-col avatar placeholder'>
          <div
            className='w-[10vw]   rounded-full'
            style={{
              backgroundColor: circle.backgroundColor
            }}
          >
            <h2 className='text-3xl text-white'>{circle.counter}</h2>
          </div>

          <div>
            <button
              className='btn join-item w-fit btn-outline'
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
