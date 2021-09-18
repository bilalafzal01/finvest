import 'tailwindcss/tailwind.css'
import LayoutOne from '../components/LayoutOne'
import LayoutTwo from '../components/LayoutTwo'

const layouts = {
  L1: LayoutOne,
  L2: LayoutTwo,
}

function MyApp({ Component, pageProps }) {
  const Layout = layouts[Component.layout] || ((children) => <>{children}</>)
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
