const UsedTechnologies = () => {
  return (
    <div className='container overflow-x-auto'>
      <table className='table table-zebra table-lg'>
        {/* head */}
        <thead>
          <tr>
            <th>#</th>
            <th>Technology Name</th>
            <th>Used For</th>
            {/* <th>Favorite Color</th> */}
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          <tr>
            <th>1</th>
            <td>React</td>
            <td>Main Functional Library</td>
          </tr>
          {/* row 2 */}
          <tr>
            <th>2</th>
            <td>React Router Dom</td>
            <td>Dynamic Routing Between Routes</td>
          </tr>
          {/* row 3 */}
          <tr>
            <th>3</th>
            <td>TailwindCss</td>
            <td>CSS Framework</td>
          </tr>
          <tr>
            <td>4</td>
            <td>DaisyUi</td>
            <td>Tailwind Component Library</td>
          </tr>
          <tr>
            <td>5</td>
            <td>Axios</td>
            <td>Data fetching</td>
          </tr>
          <tr>
            <td>6</td>
            <td>Tanstack React Query</td>
            <td>Centralized data management with react context api</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default UsedTechnologies
