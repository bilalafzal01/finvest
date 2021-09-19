import useSWR from 'swr'
import axios from 'axios'

const fetcher = (url) =>
  axios.get(url).then((res) => {
    return res.data
  })

function useInvestmentProjects(investmentType) {
  const { data, error } = useSWR(
    `http://localhost:5000/api/investmentprojects/show?investmentType=${investmentType}`,
    fetcher
  )
  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
  }
}
export default useInvestmentProjects
