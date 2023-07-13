// import { useContext } from 'react'
// import { CirclesContext } from '../../providers/CircleProvider'
import useUsersData from '../../hooks/useUsersData'

const Task2 = () => {
  // const { users } = useContext(CirclesContext)
  const [usersData] = useUsersData()

  console.log(usersData)

  return (
    <div>
      {usersData.length}
      <h4 className='text-6xl'>hi</h4>
    </div>
  )
}

export default Task2
