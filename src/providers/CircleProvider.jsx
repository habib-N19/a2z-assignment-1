/* eslint-disable react/prop-types */
import { createContext, useState } from 'react'
import useUsersData from '../hooks/useUsersData'

export const CirclesContext = createContext()
const CirclesProvider = ({ children }) => {
  const [usersData, refetch] = useUsersData()
  const [circles, setCircles] = useState([
    { id: 1, backgroundColor: '#FFFF00', counter: 0 }
  ])

  const randomColor = () => {
    const char = 'ABCDEF0123456789'
    let color = '#'
    for (let i = 0; i < 6; i++) {
      color += char[Math.floor(Math.random() * 16)]
    }
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
   
      refetch()

      const newCircle = {
        ...circle,
        id: circles.length + 1,
        counter: 0
      }
      setCircles(prevCircles => [...prevCircles, newCircle])
     
    }
  }
  const circleInfo = {
    circles,
    handleCounter,
    handleDuplicate,
    usersData
  }
  return (
    <CirclesContext.Provider value={circleInfo}>
      {children}
    </CirclesContext.Provider>
  )
}

export default CirclesProvider
