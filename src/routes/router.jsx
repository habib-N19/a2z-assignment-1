import { createBrowserRouter } from 'react-router-dom'
import Main from '../layout/Main'
import Task1 from '../tasks/task1/Task1'
import Task2 from '../tasks/task2/Task2'
import SingleUser from '../tasks/task2/SingleUser'
import UsedTechnologies from '../tasks/UsedTechnologies'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    errorElement: <h1>Error</h1>,
    children: [
      {
        path: '/',
        element: <Task1></Task1>
      },
      {
        path: '/task2',
        element: <Task2></Task2>
      },
      {
        path: '/task2/:id',
        element: <SingleUser></SingleUser>
      },
      {
        path: '/technologies',
        element: <UsedTechnologies></UsedTechnologies>
      }
    ]
  }
])
export default router
