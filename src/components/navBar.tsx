import React from "react"
import { Link, useMatch, useResolvedPath } from "react-router-dom"
import logo from "../assets/hoop-explorer-logo-clean.png"
import  SearchIcon from "../assets/icons/search-01-stroke-rounded.svg?react"
import GithubIcon from "../assets/icons/github-stroke-rounded.svg?react"

export default function NavBar() {
    return(
        <div className="fixed top-0 z-50 w-full text-black bg-gray-100">
            <nav className="flex items-center justify-center h-16 container mx-auto px-4">
                <div className="flex w-[190px] p-1">
                    <Link to="/" className="flex items-center justify-center">
                        <img src={logo}  alt="logo" className="w-14 h-25" />
                        <h1 className="font-bold text-xl">HOOP EXPLORER</h1>
                    </Link>
                </div>
                <div className="flex items-center justify-center gap-10 w-full text-lg">
                    <CustomLink to={"/"}>ACCUEIL</CustomLink>
                    <CustomLink to={"/price"}>PRICE</CustomLink>
                </div>
                <div className="text-lg flex justify-end items-center gap-3">
                <form >
                <input type="text" name="username" id="username" className="w-44 flex-1 ring-1 ring-inset ring-gray-300 rounded-lg bg-transparent py-1.5 pl-1 font-semibold text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="Search for a team..."></input>
                </form>
                    <Link to={"/create"} className="bg-transparent hover:bg-gray-50 text-gray-800 py-1 px-4 ring-1 ring-inset ring-gray-300 rounded-lg">
                        <SearchIcon className="my-[2px]"/>
                    </Link>
                    <Link to={"/create"} className="group bg-transparent hover:bg-gray-50  text-gray-800 py-1 px-4 ring-1 ring-inset ring-gray-300 rounded-lg">
                        <GithubIcon className="my-[2px]"/>
                        <span className="absolute w-auto p-2 mt-1 min-w-max rounded-md shadow-md text-white bg-gray-900 text-xs font-bold transition-all duration-100 scale-0 group-hover:scale-100">Github</span>
                    </Link>
                </div>
            </nav>
        </div>
    )
};

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
    return (
        <div className={isActive ? "underline underline-offset-4" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </div>
    )
}