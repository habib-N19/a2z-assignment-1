import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const useUsersData = () => {
  const { data: usersData = [], refetch } = useQuery({
    queryKey: ['usersData'],
    queryFn: async () => {
      const res = await axios.get('https://random-data-api.com/api/v2/users')
      return [res.data, ...usersData]
    }
  })
  return [usersData, refetch]
}

export default useUsersData
