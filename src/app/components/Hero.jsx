
import localFont from "next/font/local"

const tanFont = localFont({ src: '../tan-pearl.otf' })

export default function Hero() {

    return (
        <div className="w-full h-96 bg-hero-img bg-contain">
            <div className={`${tanFont.className} text-3xl`}>
                I see good in your eyes
            </div>
        </div>
    )
}