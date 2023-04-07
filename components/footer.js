import Image from "next/image";
import ukraine from "@/public/images/home/Flag_of_Ukraine.gif";

export default function Footer(){
    function ukraineMode(){
        const page = document.getElementById('html');
        console.log(page.classList)
        if (page.classList[0] === 'theme-ukraine'){
            page.classList.remove('theme-ukraine');
        } else {
            page.classList.add('theme-ukraine');
        }
    }
    return(
        <footer className="flex flex-col w-[100%] gap-5">
            <div className="mx-auto w-[60%] h-[2px] bg-darker/[25%] theme-ukraine:bg-primary-ukraine/[25%]"></div>
            <p className="md:text-right text-center text-xs text-darker theme-ukraine:text-primary-ukraine w-[80%]"><button onClick={ukraineMode}><Image className="w-[50px] mix-blend-multiply" src={ukraine} alt="ukraine"/></button> © 2023, Frog and Cat, LLC.</p>
        </footer>
    )
}