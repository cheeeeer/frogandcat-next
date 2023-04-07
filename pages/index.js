import Feature from "@/components/feature";
import eggrpg from "@/public/images/home/eggrpg.jpeg"
import ac2010 from "@/public/images/home/ac2010.png"
import warEconomy from "@/public/images/home/motherbase.jpeg"
import rerpg from "@/public/images/home/rerpg.png"
import Layout from "@/components/layout";

export default function Home() {

    return (
        <Layout title="Home" heading="Welcome to our website" subHeading="We make stuff sometimes." type="logo">
                <h1>Featured Projects</h1>
                <section className="flex flex-col md:flex-row gap-8">
                    <Feature title="War Economy"
                             img={warEconomy}
                             url="/games/war-economy"
                             body="A board game about running your own Private Military Company. Collect war spoils, manipulate conflicts, and outsmart your enemies."
                    />
                    <Feature title="RESIDENT EVIL: RPG"
                             img={rerpg}
                             url="/games/resident-evil-rpg"
                             body="Solve puzzles and face off against bio-organic weapons and evil pharmaceutical companies in this unofficial survival-horror nightmare by Frog and Cat, LLC."
                    />
                    <Feature title="EGG RPG"
                             img={eggrpg}
                             url="/games/egg-rpg"
                             body="A pre-cyberpunk RPG focused on fast combat and deadly mutilation. With earth destroyed, life continues on corporate-run megaships that drift through the stars."
                    />
                    <Feature title="Alien Cop 2010"
                             img={ac2010}
                             url="/movies/alien-cop-2010"
                             body="In this out-of-this-world crime drama, a loose-cannon officer is attacked by notorious criminal Big James, so he takes it upon himself to bring him to justice—dead or alive."
                    />
                </section>
        </Layout>
    )
}
