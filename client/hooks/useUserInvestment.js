import useSWR from 'swr'
import axios from 'axios'

const fetcher = (url) =>
  axios.get(url).then((res) => {
    return res.data
  })

function useInvestmentTypes(userId) {
  const { data, error } = useSWR(
    `http://localhost:5000/api/userinvestments/show?user=${userId}`,
    fetcher
  )
  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
  }
}
export default useInvestmentTypes
