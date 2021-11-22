import Link from 'next/link'

export default function AboutMe() {
  return (
    <>
      <h1>This page is all about me</h1>
    <p>Welcome to my page</p>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </>
  )
}

