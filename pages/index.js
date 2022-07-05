import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
 

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Cutii de carton, Cutii carton ieftine, Cutii de carton cu autoformare</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Ce este folia cu bule de aer?" />
        <p className="description">
          test
    
        </p>
      </main>

      <Footer />
    </div>
  )
}
