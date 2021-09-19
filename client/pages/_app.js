import 'tailwindcss/tailwind.css'
import LayoutOne from '../components/LayoutOne'
import LayoutTwo from '../components/LayoutTwo'
import UserProvider from '../providers/UserProvider'

const layouts = {
  L1: LayoutOne,
  L2: LayoutTwo,
}

function MyApp({ Component, pageProps }) {
  const Layout = layouts[Component.layout] || ((children) => <>{children}</>)
  return (
    <UserProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UserProvider>
  )
}

export default MyApp
