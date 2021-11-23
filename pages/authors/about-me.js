import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'
import Image from 'next/image'



export default function AboutMe() {
  return (
    <Layout>
      <Head>
        <title>About Me</title>
      </Head>
      <h3>Things I love</h3>
      <>
            <Image
              priority
              src="/images/cats.jpg"
              height= {64}
              width={64}
              layout='responsive'
            />
          </>
      </Layout>
  
  )
}


