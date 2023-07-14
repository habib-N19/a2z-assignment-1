import { NavLink } from 'react-router-dom'

const NavBar = () => {
  const navItems = [
    {
      url: '/',
      title: 'Home'
    },
    {
      url: '/task2',
      title: 'Task 2'
    },
    {
      url: '/task3',
      title: 'Task 3'
    },
    {
      url: '/technologies',
      title: 'Used Technologies'
    }
  ]

  return (
    <nav className='mb-2 md:mb-6'>
      <ul className='flex justify-center px-4 py-3 mx-auto mt-5 font-semibold rounded-full shadow-lg w-fit bg-zinc-800 md:gap-4'>
        {navItems.map(n => (
          <li key={n.url}>
            <NavLink
              className='transition hover:underline hover:duration-150 hover:opacity-100 hover:text-white'
              to={n.url}
            >
              {n.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default NavBar
