'use client'

import AppLink from "@/models/AppLink";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";

interface HeaderProps {
    appTitle: string;
    links?: AppLink[];
}

const Header: FC<HeaderProps> = ({ appTitle, links }) => {

    const pathname = usePathname()

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <div className="container-fluid">
                <Link href="/" className="navbar-brand">{appTitle}</Link>
                {
                    links && (
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            {
                                links.map((link) => (
                                    <li className="nav-item" key={link.text} >
                                        <Link
                                            className={pathname === link.path ? "nav-link active" : "nav-link"}
                                            href={link.path}
                                        >
                                            <i className={link.icon} /> {link.text}
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                    )
                }
            </div>
        </nav>
    )
};

export default Header;