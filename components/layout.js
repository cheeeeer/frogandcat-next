import Head from "next/head";
import Navbar from "@/components/nav";
import Footer from "@/components/footer";
import Hero from "@/components/hero";

export default function Layout({ children, title, heading, subHeading, type, img}) {
    return (
        <>
            <Head>
                <title>{title} - Frog and Cat, LLC</title>
                <meta name="description" content="The official website of Frog and Cat, LLC." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/frogcat.svg" />
            </Head>
            <Navbar/>
            <Hero heading={heading} subHeading={subHeading} type={type} img={img}/>
            <main className="flex flex-col gap-7 font-[Ubuntu] my-[2%] mx-auto w-[60%]">
                {children}
            </main>
            <Footer/>
        </>
    )
}