import useSWR from 'swr'
import axios from 'axios'

function useInvestmentProjects(investmentType) {
  const fetcher = (url) =>
    axios.get(url).then((res) => {
      console.log(res.data)
      return res.data
    })

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
