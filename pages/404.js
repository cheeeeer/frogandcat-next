import Link from "next/link";

export default function Custom404(){
    return(
        <main className="flex flex-col justify-center text-center mt-20 gap-5">
            <h1>404 - Page Not Found</h1>
            <p>Sowwy!!! Our code monkeys are working <i>suuuper</i> hard to get this page set up for you!</p>
            <Link href={'/'} className="underline text-primary theme-ukraine:text-primary-ukraine">Home</Link>
        </main>
    )
}