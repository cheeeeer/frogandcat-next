import Link from "next/link";
import Image from "next/image";

export default function Feature({ title, body, img, url }){
    return(
        <section className="flex flex-col justify-center gap-5 max-w-[23%] select-none ">
            <Link href={url} className="px-2 text-lg text-darker theme-ukraine:text-primary-ukraine font-[500]">{title}</Link>
            <Link href={url}><Image src={img} alt={title}/></Link>
            <div className="flex flex-col text-stretch grow">
                <p className="px-2 text-lg font-[Ubuntu] text-left font-[300] text-[#47464F] theme-ukraine:text-primary-ukraine">{body}</p>
            </div>
            <Link href={url} className="text-md text-white theme-ukraine:text-background-ukraine rounded py-2 text-center font-[Ubuntu] bg-primary theme-ukraine:bg-primary-ukraine hover:shadow-md shadow-[0] hover:opacity-[85%] transition duration ease-in-out">READ MORE</Link>
        </section>
    )
}