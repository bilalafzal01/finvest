import useSWR from 'swr'
import axios from 'axios'

function useInvestmentTypes() {
  const fetcher = (url) =>
    axios.get(url).then((res) => {
      return res.data
    })

  const { data, error } = useSWR(
    `http://localhost:5000/api/investmenttype/show`,
    fetcher
  )
  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
  }
}
export default useInvestmentTypes
