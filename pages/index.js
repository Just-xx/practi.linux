import Head from 'next/head'
import Title from '../components/Title'
import Terminal from '../components/Terminal'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>practi.linux</title>
        <meta name="description" content="practi.linux is place where you can learn bassic linux commands" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Title />
      <Terminal />
    </div>
  )
}
