import Layout from "@/components/layout";
import Image from "next/image";
import warEconomyBanner from "@/public/images/games/war economy/wareconomy_screenshot.jpg"
import photo from "@/public/images/games/war economy/we_placeholder.png"
export default function Page() {
    return (
        <Layout type="image" img={warEconomyBanner} title="War Economy" heading="War Economy" subHeading="RUN YOUR OWN PRIVATE MILITARY COMPANY. COLLECT WAR SPOILS, MANIPULATE CONFLICTS, AND OUTSMART YOUR ENEMIES.">
            <section>
                <Image className="w-[40%]" src={photo} alt="war economy"/>
                <h1>War crimes have never been this fun!</h1>
            </section>
        </Layout>
    )
}