import useSWR from 'swr'
import axios from 'axios'

const fetcher = (url) =>
  axios.get(url).then((res) => {
    return res.data
  })

function useUser(id) {
  if (id) {
    var { data, error } = useSWR(
      `http://localhost:5000/api/users/getuser?userID=${id}`,
      fetcher
    )
    return {
      user: data,
      isLoading: !error && !data,
      isError: error,
    }
  } else {
    return {
      user: undefined,
      isLoading: false,
      isError: true,
    }
  }
}
export default useUser
