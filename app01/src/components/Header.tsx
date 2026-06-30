import Link from "next/link";
import { FC } from "react";
import headerStyle from "./Header.module.css"

const Header : FC<{title:string}> = ({title}) => (
    <header className={headerStyle.navbar}>                
        <Link href="/" className={headerStyle.titleBadge}><strong>{title}</strong></Link>
        <Link href="/aboutUs">About Us</Link>
        <Link href="/contactUs">Contact Us</Link>        
        <Link href="/greet/Vamsy">Greet</Link>        
        <Link href="/greet2/Vamsy/Murthy/Suresh">Greet All</Link>            
        <Link href="/greet3/Vamsy">Greet On Server</Link>  
        <Link href="/greet4/Vamsy">Greet All On Server</Link>        
    </header>
);

export default Header;