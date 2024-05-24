import React from "react"
import { Link, useMatch, useResolvedPath } from "react-router-dom"
import logo from "../assets/hoop-explorer-logo-clean.png"


export default function NavBar() {
    const resolvedPath = useResolvedPath("")
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
    return(
        <div className="fixed top-0 z-50 w-full text-black bg-gray-100">
            <nav className="flex items-center justify-center h-16 container mx-auto px-4">
                <div className="flex w-[190px] p-1">
                    <Link to="/" className="flex items-center justify-center">
                        <img src={logo}  alt="logo" className="w-14 h-25" />
                        HOOP EXPLORER
                    </Link>
                </div>
                <div className="flex items-center justify-center gap-10 w-full">
                    <CustomLink to={"/"}>ACCUEIL</CustomLink>
                    <CustomLink to={"/price"}>PRICE</CustomLink>
                </div>
                <div>
                    <Link to={"/create"}>Create</Link>
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