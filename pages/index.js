import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Cutii de carton, Cutii carton ieftine, Cutii de carton cu autoformare - cartonescu.ro</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Cutii de carton, Cutii carton ieftine, Cutii de carton cu autoformare" />
        <p className="description">
 Cartonescu este un magazin online dedicat ambalejelor și produselor destinate pregătirii și împachetarii coletelor.

    Sursa text <a href="https://www.foliebule.ro">https://www.foliebule.ro</a>
          Get started by editing <code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
