import {useRouter} from 'next/router';
import Main from '../layouts/Main'; 
import Head from 'next/head'

export default function Index () {
  return <>
    <Head>
      <title>Lisandro Marchionni</title>
    </Head>
    <style></style>
    <Main>
      <section className="content">
        <h1>Hola mundo</h1>
      </section>
    </Main>
  </>
}
