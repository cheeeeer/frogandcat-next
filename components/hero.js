import Logo from "@/components/logo";
import Image from "next/image";
export default function Hero({ type,heading,subHeading,img }){
    if (type==="logo") {
        return <LogoHero heading={heading} subHeading={subHeading}/>;
    } else if (type==="image") {
        return <ImageHero heading={heading} subHeading={subHeading} img={img}/>;
    }
}
function LogoHero({ heading, subHeading }){
    return(
        <header className="bg-primary theme-ukraine:bg-primary-ukraine h-[280px] w-[100%] text-left">
            <div className="flex justify-center w-[100%] absolute">
                <Logo color="white" className="w-[50%] opacity-40 md:opacity-100 md:w-[11%]"></Logo>
            </div>
            <div className="flex flex-col gap-7 text-white theme-ukraine:text-background-ukraine font-[Ubuntu] pt-[5%] pl-[20%]">
                <h1 className="text-2xl  font-[450]">
                    {heading}
                </h1>
                <h2 className="text-lg  font-[450] max-w-[30%]">
                    {subHeading}
                </h2>
            </div>
        </header>
    )
}
function ImageHero({ heading, subHeading, img }){
    return(
        <header className="bg-primary theme-ukraine:bg-primary-ukraine h-[280px] w-[100%] text-left">
            <div className="flex justify-center w-[100%] absolute">
                <Image src={img} alt={heading} className="w-[50%] opacity-40 md:opacity-100 md:w-[100%] h-[280px] object-cover brightness-50 z-30"></Image>
            </div>
            <div className="flex flex-col gap-7 text-white theme-ukraine:text-background-ukraine font-[Ubuntu] pt-[5%] pl-[20%]">
                <h1 className="text-2xl  font-[450] z-40">
                    {heading}
                </h1>
                <h2 className="text-lg  font-[450] max-w-[50%] z-40">
                    {subHeading}
                </h2>
            </div>
        </header>
    )
}