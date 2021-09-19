import router from 'next/router'
import useUser from '../hooks/useUser'

// layouts/Layout2.jsx
const LayoutTwo = ({ children }) => {
  if (process.browser) {
    var { user, isLoading, error } = useUser(localStorage.getItem('userId'))
    if (user && !isLoading && !error) {
      router.push(`/`)
    }
  }
  if (isLoading) {
    return (
      <div class=" flex justify-center items-center">
        <div class="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-500"></div>
      </div>
    )
  }
  if (!isLoading && !user) {
    return <div>{children}</div>
  }
  return (
    <div className="flex items-center justify-center ">
      <div className="w-32 h-32 border-t-2 border-b-2 border-purple-500 rounded-full animate-spin"></div>
    </div>
  )
}
export default LayoutTwo
