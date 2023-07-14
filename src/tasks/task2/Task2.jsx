import { useContext } from 'react'
import { CirclesContext } from '../../providers/CircleProvider'
import { Link } from 'react-router-dom'
// import useUsersData from '../../hooks/useUsersData'

const Task2 = () => {
  const { usersData } = useContext(CirclesContext)

  console.log(usersData)

  return (
    <div className='grid w-11/12 grid-cols-1 gap-4 mx-auto md:grid-cols-3'>
      {usersData.map(userData => (
        <Link key={userData.id} to={`/task2/${userData.id}`}>
          <div
            key={userData.id}
            className='w-full transition-all border shadow-xl cursor-pointer card bg-base-100 hover:scale-105'
          >
            <figure className='px-10 pt-10 avatar'>
              <div className='w-20 rounded-full'>
                <img src={userData.avatar} />
              </div>
            </figure>
            <div className='card-body'>
              <h2 className='card-title'>
                Name: {userData.first_name + ' ' + userData.last_name}
              </h2>
              <p className='font-semibold'>
                Title: {userData.employment.title}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default Task2
