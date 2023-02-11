import Head from 'next/head';
import Hero from '@/components/home/landing';

// import styles from '@/styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Creativo Code</title>
        <meta name="description" content="We are Creativo-Code" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-full h-screen ">

        <Hero/>

      </main>
    </>
  );
}
