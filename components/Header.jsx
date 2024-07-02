// HEADER @IMPORTS 
import Link from "next/link";
import { Button } from "./ui/button";

// COMPONENTS - IMPORT 
import Nav from "./Nav";
import MobileNav from "./MobileNav";


// HEADER CALL-BACKS
const Header = () => {
    return (
        <header className="py-8 xl:py-12 text-white">
            <div className="container max-auto flex justify-between items-center">

                {/* LOGO */}
                <Link href={"/"}>
                    <h1 className="text-4xl font-semibold"> SUVAJIT <span className="text-accent">.</span></h1>
                </Link>

                {/* DESKTOP-NAVIGATION & HIRE ME BUTTON */}
                <div className="hidden xl:flex items-center gap-8">
                    <Nav/>  
                    <Link href="/contact">
                        <Button> HIRE ME </Button>
                    </Link>
                </div>

                {/* MOBILE-NAVIGATION */}
                <div className="xl:hidden"> 
                    <MobileNav/>
                </div>

            </div>
        </header>
    );
};

// EXPORTING HEADER
export default Header;