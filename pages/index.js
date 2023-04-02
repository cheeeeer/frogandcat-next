import Head from 'next/head'
import Navbar from "@/components/nav";
import Hero from "@/components/hero";
import Feature from "@/components/feature";
import eggrpg from "@/public/images/home/eggrpg.jpeg"
import ac2010 from "@/public/images/home/ac2010.png"
import warEconomy from "@/public/images/home/motherbase.jpeg"
import rerpg from "@/public/images/home/rerpg.png"
import Image from "next/image";
import ukraine from "@/public/images/home/Flag_of_Ukraine.gif"

export default function Home() {
    function ukraineMode(){
        const page = document.getElementById('html');
        console.log(page.classList)
        if (page.classList[0] === 'theme-ukraine'){
            page.classList.remove('theme-ukraine');
        } else {
            page.classList.add('theme-ukraine');
        }
    }

    return (
        <>
            <Head>
                <title>Frog and Cat, LLC</title>
                <meta name="description" content="The official website of Frog and Cat, LLC." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/frogcat.svg" />
            </Head>
            <Navbar/>
            <Hero/>
            <main className="flex flex-col gap-7 text-primary theme-ukraine:text-primary-ukraine font-[Ubuntu] my-[2%] mx-auto w-[60%]">
                <h1 className="text-2xl  font-[450]">Featured Projects</h1>
                <section className="flex flex-row gap-8">
                    <Feature title="War Economy"
                             img={warEconomy}
                             url="/games/war-economy"
                             body="A board game about running your own Private Military Company. Collect war spoils, manipulate conflicts, and outsmart your enemies."
                    />
                    <Feature title="RESIDENT EVIL: RPG"
                             img={rerpg}
                             url="/games/re-rpg"
                             body="Solve puzzles and face off against bio-organic weapons and evil pharmaceutical companies in this unofficial survival-horror nightmare by Frog and Cat, LLC."
                    />
                    <Feature title="EGG RPG"
                             img={eggrpg}
                             url="/games/egg-rpg"
                             body="A pre-cyberpunk RPG focused on fast combat and deadly mutilation. With earth destroyed, life continues on corporate-run megaships that drift through the stars."
                    />
                    <Feature title="Alien Cop 2010"
                             img={ac2010}
                             url="/movies/alien-cop/2010"
                             body="In this out-of-this-world crime drama, a loose-cannon officer is attacked by notorious criminal Big James, so he takes it upon himself to bring him to justice—dead or alive."
                    />
                </section>
            </main>

            <footer className="flex flex-col w-[100%] gap-5">
                    <div className="mx-auto w-[60%] h-[2px] bg-darker/[25%] theme-ukraine:bg-primary-ukraine/[25%]"></div>
                <p className="text-right text-xs text-darker theme-ukraine:text-primary-ukraine w-[80%]"><button onClick={ukraineMode}><Image className="w-[50px] mix-blend-multiply" src={ukraine} alt="ukraine"/></button> © 2023, Frog and Cat, LLC.</p>
                </footer>
        </>
    )
}
