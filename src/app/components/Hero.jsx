
import localFont from "next/font/local"

const tanFont = localFont({ src: '../tan-pearl.otf' })

export default function Hero() {

    return (
        <div className="w-full h-screen bg-hero-img bg-cover bg-center">
            <div className="h-full flex justify-center items-center text-center">
                <div>
                    <h1 className={`${tanFont.className} text-6xl my-16`}>
                        I see good in your eyes
                    </h1>
                    <h2 className={`${tanFont.className} text-xl`}>
                        A film by Harvey Planer
                    </h2>
                </div>
            </div>
        </div>
    )
}