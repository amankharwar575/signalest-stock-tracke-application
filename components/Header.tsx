import React from 'react'
import Link from "next/link"
import Image from "next/image";
import logo from "@/public/assets/icons/logo.svg";
import NavItems from "@/components/NavItems";
import UseDropDown from "@/components/UseDropDown";
const Header = () => {
    return (
        <header className="sticky top-0 header" >
            <div className="container header-wrapper">
                <Link href="/">
                    <Image
                        src={logo}
                        alt="Signalist logo"
                        width={140}
                        height={32}
                        className="h-8 w-auto cursor-pointer"
                    />

                </Link>
                <nav className="hidden sm:block">
                    <NavItems/>

                </nav>
                 <UseDropDown/>

            </div>
        </header>
    )
}
export default Header
