import Link from 'next/link'
import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
     
      <section className={utilStyles.headingMd}>
        <p>Hello!  My name is Anita.  I'm a software developer and kitten lover!</p>
        <p>
        <Link href="/posts/first-post">
        <a>Here is my first post!</a>
        </Link>
        </p>
        <p>
        <Link href="/posts/second-post">
        <a>Here is my second post!</a>
        </Link>
        </p>
        <p>
        <Link href="/authors/about-me">
        <a>Here you can read about me!</a>
        </Link>
        </p>

          (This is a sample website - you will be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
      </section>
    </Layout>
  )
}
