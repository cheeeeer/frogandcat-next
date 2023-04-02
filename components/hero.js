import Logo from "@/components/logo";

export default function Hero(){
    return(
        <header className="bg-primary theme-ukraine:bg-primary-ukraine h-[280px] w-[100%] text-left">
            <div className="flex justify-center w-[100%] absolute">
                <Logo color="white" className="w-[11%]"></Logo>
            </div>
            <div className="flex flex-col gap-7 text-white theme-ukraine:text-background-ukraine font-[Ubuntu] pt-[5%] pl-[20%]">
                <h1 className="text-2xl  font-[450]">
                    Welcome to our website
                </h1>
                <h2 className="text-lg  font-[450]">
                    We make stuff sometimes.
                </h2>
            </div>
        </header>
    )
}