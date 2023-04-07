import Link from "next/link";
import Logo from "@/components/logo";

export default function Navbar(){
    const sections = [
        { name: 'Home', url: '/' },
        { name: 'Games', url: '/games' },
        { name: 'Movies', url: '/movies' },
        { name: 'About', url: '/about' }
    ]
    const navSections = sections.map((i)=> <Section key={i.name} name={i.name} url={i.url}/>)
    return(
        <div className="sticky top-0 z-50">
        <nav className="flex flex-col md:flex-row justify-center md:justify-between theme-ukraine:bg-primary-ukraine bg-primary text-white theme-ukraine:text-background-ukraine text-xl pt-5 px-10 select-none font-[Ubuntu]">
            <div className="flex flex-row md:justify-start justify-center items-center gap-8">
                <Logo color="white" className="w-[7.5%]"/>
                <p>Frog and Cat, LLC.</p>
            </div>
            <nav className="flex justify-center md:justify-end gap-10">
                {navSections}
            </nav>
        </nav>
        </div>
    )
}
function Section({ name, url}) {
    return(
        <div>
            <Link href={url} className="hover:opacity-75">{name}</Link>
        </div>
    )
}