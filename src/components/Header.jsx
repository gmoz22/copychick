import * as React from "react";
import { useLocation } from 'react-router-dom';

function Header(props) {
    let location = useLocation();
    let bg = !!props.transparent ? "bg-transparent" : "bg-white";
    return (
        <nav className={`${bg} fixed top-0 left-0 z-50 w-screen`}>
            <div className="max-w-7xl mt-6 mx-auto px-4">
                <div className="max-w-2xl space-x-2 float-left">
                    <a href="/" className="flex items-center py-4 px-2">
                        {/*<img src="logo.png" alt="Logo" class="h-8 w-8 mr-2" />*/}
                        <span className={`logo-text`}>Copychick</span>
                    </a>
                </div>
                <div className="hidden md:flex max-w-5xl items-center space-x-7 float-right">
                    <a href="/"
                       className={location.pathname === "/" ? "menu-item-active" : "menu-item"}>Home</a>
                    {/*<a href="/process-promise" className={location.pathname === "/process-promise" ? "menu-item-active" : "menu-item"}>Process + Promise</a>*/}
                    <a href="/services"
                       className={location.pathname === "/services" ? "menu-item-active" : "menu-item"}>Services</a>
                    {/*<a href="/about" className={location.pathname === "/about" ? "menu-item-active" : "menu-item"}>About</a>*/}
                    <a href="/portfolio"
                       className={location.pathname.substring(0,10) === "/portfolio" ? "menu-item-active" : "menu-item"}>Portfolio</a>
                    <a href="/contact"
                       className={location.pathname === "/contact" ? "menu-item-active" : "menu-item"}>Let's Chat</a>
                </div>
            </div>

            <div className="md:hidden flex items-center float-right">
                <button className="outline-none mobile-menu-button" data-collapse-toggle="navbar-dropdown">
                    <svg className=" w-6 h-6 text-gray-500 hover:text-primary-500 "
                         x-show="!showMenu"
                         fill="none"
                         stroke-linecap="round"
                         stroke-linejoin="round"
                         stroke-width="2"
                         viewBox="0 0 24 24"
                         stroke="currentColor"
                    >
                        <path d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>
            <div className="clear-both"> </div>

            <div className="hidden mobile-menu" id="navbar-dropdown">
                <ul className="">
                    <li><a href="/"
                       className={location.pathname === "/" ? "menu-item-active" : "menu-item"}>Home</a></li>
                    {/*<li><a href="/process-promise" className={location.pathname === "/process-promise" ? "menu-item-active" : "menu-item"}>Process + Promise</a></li>*/}
                    <li><a href="/services"
                           className={location.pathname === "/services" ? "menu-item-active" : "menu-item"}>Services</a></li>
                    {/*<li><a href="/about" className={location.pathname === "/about" ? "menu-item-active" : "menu-item"}>About</a></li>*/}
                    <li><a href="/portfolio"
                           className={location.pathname === "/portfolio" ? "menu-item-active" : "menu-item"}>Portfolio</a></li>
                    <li><a href="/contact"
                       className={location.pathname === "/contact" ? "menu-item-active" : "menu-item"}>Let's Chat</a></li>
                    {/*<li class="active"><a href="index.html" class="block text-sm px-2 py-4 text-white bg-green-500 font-semibold">Home</a></li>*/}
                    {/*<li><a href="#services" class="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Services</a></li>*/}
                    {/*<li><a href="#about" class="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">About</a></li>*/}
                    {/*<li><a href="#contact" class="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Contact Us</a></li>*/}
                </ul>
            </div>
        </nav>
    );
}

export default Header;
