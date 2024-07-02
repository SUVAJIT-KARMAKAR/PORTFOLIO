// NAVIGATION @IMPORT 
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";


// LINK - OBJECT 
const links = [
    {
        name: "home",
        path: "/",
    },

    {
        name: "services",
        path: "/services",
    },

    {
        name: "resume",
        path: "/resume",
    },

    {
        name: "work",
        path: "/work",
    },

    {
        name: "contact",
        path: "/contact",
    }
]

// NAVIGATION CALL-BACK
const Nav = () => {
    const pathname =  usePathname();

    return (
        <nav className="flex gap-8">
            {links.map((link, index) => {
                return (
                    <Link href={link.path} key={index} className={`${link.path === pathname && "text-accent border-b-2 border-accent"} uppercase font-medium hover:text-accent transition-all `}>
                        {link.name}
                    </Link>
                );
            })}
        </nav>
    );
};

// EXPORTING NAVIGATION 
export default Nav; 