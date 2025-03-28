import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef(null);

    const toggleMenu = () => setMenuOpen(!menuOpen);
    const closeMenu = () => setMenuOpen(false);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            setMenuOpen(false);
        }
    };
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                closeMenu();
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <nav className="flex fixed top-0 left-0 z-50 w-full  md:px-25 px-3 justify-between items-center nav-gradient">
            <p className="font-sans-serif font-extrabold md:text-[35px] text-[25px] text-color">NEXTRUST</p>

            {/* Desktop Links (Hidden on Small Screens) */}
            <div className="hidden md:flex gap-4 p-4 items-center justify-between">
                <Link onClick={() => scrollToSection("introduction")} className="font-sans text-white hover:underline">
                    Investments
                </Link>
                <Link onClick={() => scrollToSection("benefits")} className="font-sans text-white hover:underline">
                    Benefits
                </Link>
                <Link onClick={() => scrollToSection("services")} className="font-sans text-white hover:underline">
                    Our Services
                </Link>
                <Link onClick={() => scrollToSection("about")} className="font-sans text-white hover:underline">
                    About us
                </Link>
                <button className="px-5 border-1 text-white border-white rounded cursor-pointer" onClick={closeMenu}>
                    Login
                </button>
                <button className="px-4 py-1 bg-custom text-white rounded cursor-pointer" onClick={closeMenu}>
                    Register
                </button>
            </div>

            {/* Mobile Menu Icon (Hidden on Larger Screens) */}
            <div className="md:hidden relative" ref={menuRef}>
                <button onClick={toggleMenu} className="text-white">
                    {menuOpen ? <CloseIcon fontSize="large" /> : <MenuIcon fontSize="large" />}
                </button>

                {/* Mobile Menu (Dropdown) */}
                {menuOpen && (
                    <div
                        className="absolute top-full right-0 mt-2 w-48 bg-black bg-opacity-90 rounded-lg shadow-lg flex flex-col items-center space-y-3 py-4 px-6 z-50"
                    >
                        <Link onClick={() => scrollToSection("introduction")} className="font-sans text-white hover:underline">
                            Investments
                        </Link>
                        <Link onClick={() => scrollToSection("benefits")} className="font-sans text-white hover:underline">
                            Benefits
                        </Link>
                        <Link onClick={() => scrollToSection("services")} className="font-sans text-white hover:underline">
                            Our Services
                        </Link>
                        <Link onClick={() => scrollToSection("about")} className="font-sans text-white hover:underline">
                            About us
                        </Link>

                        <button className="px-5 py-2 border-2 border-white rounded text-white w-full cursor-pointer" onClick={closeMenu}>
                            Login
                        </button>
                        <button className="px-4 py-2 bg-custom text-white rounded w-full cursor-pointer" onClick={closeMenu}>
                            Register
                        </button>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default NavBar;
