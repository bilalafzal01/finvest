import useSWR from 'swr'
import axios from 'axios'

const fetcher = (url) =>
  axios.get(url).then((res) => {
    return res.data
  })

function useProjectProgress(projectId) {
  const { data, error } = useSWR(
    `http://localhost:5000/api/investmentprojects/progress?projectId=${projectId}`,
    fetcher
  )
  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
  }
}
export default useProjectProgress
