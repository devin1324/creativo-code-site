import Head from 'next/head';
import {
  Technologies,
  Services,
  Projects,
  Hero,
  AboutUs,
  WhyUs,
} from '@/components/home';

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
        <Hero />
        <Services />
        <Projects />
        <WhyUs />
        <Technologies />
        <AboutUs />
      </main>
    </>
  );
}
