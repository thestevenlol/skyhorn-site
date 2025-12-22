import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { MenuIcon, X } from "lucide-react";

const navItems: Record<string, string> = {
    overview: "/overview",
    characters: "/characters",
    gallery: "/gallery"
};

function MobileNav() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Hamburger stays fixed on top */}
            <Button
                onClick={() => setIsOpen(prev => !prev)}
                className="fixed top-4 left-4 z-50"
            >
                {isOpen ? <X /> : <MenuIcon />}
            </Button>

            {isOpen && (
                <div className="fixed inset-0 z-40 bg-primary">
                    <ul className="w-full flex justify-center align-middle flex-col gap-2 mt-20">
                        {Object.entries(navItems).map(([label, path]) => (
                            <li key={label} className=" cursor-pointer list-none text-white my-4 p-0 text-center"><a href={path}>{label}</a></li>
                        ))}
                    </ul>
                </div>
            )}
        </>
    );
}

function DesktopNav() {
    return (
        <div>
        </div>
    );
}

export function Nav() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 900);
        }

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    if (isMobile) {
        return <MobileNav />;
    }

    return <DesktopNav />;
}