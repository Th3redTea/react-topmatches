import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Header from '../components/header'
import MatcheTable from '../components/matcheTable'

export default function Home() {
  return (
    <>
      <Head>
        <title>Top football matches</title>
        <meta name="keywoards" content="today's football matches" />
      </Head>
     <MatcheTable />
    </>
  )
}
