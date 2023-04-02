import Head from 'next/head'
import Navbar from "@/components/nav";
import Hero from "@/components/hero";
export default function Home() {
    return (
        <>
            <Head>
                <title>Frog and Cat, LLC</title>
                <meta name="description" content="The official website of Frog and Cat, LLC." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/frogcat.svg" />
            </Head>
            <main>
                <Navbar></Navbar>
                <Hero></Hero>
            </main>
        </>
    )
}
