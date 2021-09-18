import Head from 'next/head'
import { useRouter } from 'next/router'
import { LinkProps } from 'next/link'

const defaultMeta = {
  title: 'Finvest',
  site_name: 'Investment Platform',
  description:
    'Hi! I am Bilal Afzal; a Full Stack Developer & Mentor. I design and code beautifully simple things, and I love what I do.',
  url: 'http://localhost:3000',
  image: 'http://localhost:3000/favicon/large-og.jpg',
  type: 'website',
  robots: 'follow, index',
}

export default function Seo(props) {
  const router = useRouter()
  const meta = {
    ...defaultMeta,
    ...props,
  }
  meta['title'] = props.templateTitle
    ? `${props.templateTitle} | ${meta.site_name}`
    : meta.title

  return (
    <Head>
      <title>{meta.title}</title>
      <meta name="robots" content={meta.robots} />
      <meta content={meta.description} name="description" />
      <meta property="og:url" content={`${meta.url}${router.asPath}`} />
      <link rel="canonical" href={`${meta.url}${router.asPath}`} />
      {/* Open Graph */}
      <meta property="og:type" content={meta.type} />
      <meta property="og:site_name" content={meta.site_name} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:title" content={meta.title} />
      <meta name="image" property="og:image" content={meta.image} />
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@bilalafzal1911" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={meta.image} />
      {meta.date && (
        <>
          <meta property="article:published_time" content={meta.date} />
          <meta
            name="publish_date"
            property="og:publish_date"
            content={meta.date}
          />
          <meta name="author" property="article:author" content="Bilal Afzal" />
        </>
      )}
    </Head>
  )
}
