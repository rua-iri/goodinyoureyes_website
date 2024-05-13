
import localFont from "next/font/local"

const tanFont = localFont({ src: '../tan-pearl.otf' })

export default function Hero() {

    return (
        <div className="w-full h-screen bg-hero-img bg-cover bg-center">
            <div className="h-full flex justify-center items-center text-center">
                <div className={`${tanFont.className} text-6xl`}>
                    I see good in your eyes
                </div>
            </div>
        </div>
    )
}