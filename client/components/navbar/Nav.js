import NavLarge from './NavLarge'
import useWindowSize from '../../hooks/useWindowSize'
import { SIZES } from '../../constants/index'
import NavSmall from './NavSmall'

const links = [
  { href: '/faq', label: 'FAQ' },
  { href: '/learn-more', label: 'Learn More' },
  { href: '/contact-us', label: 'Contact us' },
]

export default function Nav() {
  const { width } = useWindowSize()

  return width >= SIZES.LG ? (
    <NavLarge links={links} isSticky={false} />
  ) : (
    <NavSmall links={links} isSticky={true} />
  )
}
