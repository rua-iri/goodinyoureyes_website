import Link from "next/link"
import { Inter, Raleway } from "next/font/google";
import localFont from "next/font/local"

const inter = Inter({ subsets: ["latin"] });
const raleway = Raleway({ subsets: ["latin"] });
const tanFont = localFont({ src: '../tan-pearl.otf' })



export default function NavbarLink({ href, text }) {

    return (
        <Link
            className={`${raleway.className} font-light mix-blend-difference hover:border-b hover:border-black`}
            href={href}>
            {text}
        </Link>
    )
}