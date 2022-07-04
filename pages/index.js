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
 Cartonescu este un magazin online dedicat ambalejelor și produselor destinate pregătirii și împachetarii coletelor.<br/>
Am lansat Cartonescu cu o echipă mică și mult curaj, într-un moment de creștere accelerată a nevoii de ambalaje. <br/>
    Ne-am ales un nume haios, care vrem să inspire familiaritate și prezență constantă, deoarece ne dorim să devenim <br/>
    acel furnizor care este mereu aproape de clientul său. Asocierea numelui indică miezul afacerii noastre – clasicul carton, <br/><br/>
    simbol al ambalajului in orice forma. Cand spui Cutii de carton, exprimi forma tradițională de ambalare de pretutindeni. <br/>
    Deși numele nostru se vrea a fi unul comun, noi ne propunem să ieșim din anonimat. Și cum am putea să facem acest lucru <br/>
    într-o lume a transformării și evoluției, decât apelând la un lucru care va rămâne neatins: grija față de oameni. <br/>
    În calitate de furnizor de produse de ambalare, ne-am stabilit ca misiune să ne conectăm cu oamenii, clienții noștri <br/>
    și să le venim în întâmpinarea nevoilor.
    Sursa text <a href="https://www.foliebule.ro">https://www.foliebule.ro</a>
          Get started by editing <code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
