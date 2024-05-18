import Link from "next/link"
import NavbarLink from "./NavbarLink"

export default function Navbar() {

    const navbarArray = [
        {
            "href": "#director",
            "text": "Director"
        },
        {
            "href": "#crew",
            "text": "Crew"
        },
        {
            "href": "#instagram",
            "text": "Instagram"
        },
        {
            "href": "#contact",
            "text": "Contact"
        },
    ]

    return (
        <div className="absolute w-full opacity-70 flex justify-evenly py-1.5">

            {
                navbarArray.map((navbarItem, index) => (
                    <NavbarLink
                        href={navbarItem.href}
                        text={navbarItem.text}
                        key={index}
                    />
                ))
            }

        </div>
    )
}