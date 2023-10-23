import React, {useState} from "react";
import "../styles/components/_navbar.scss"
import {IconMenu2} from "@tabler/icons-react";
import {IconX} from "@tabler/icons-react"

function NavBar() {

    const [burgerMenu, setBurgerMenu] = useState(false);

    const links = [
        {
            id: "l1",
            name: 'Home',
            anchor: '#home'
        },
        {
            id: "l2",
            name: 'About',
            anchor: '#about'
        },
        {
            id: "l3",
            name: 'Projects',
            anchor: '#projects'
        },
        {
            id: "l4",
            name: 'Contact',
            anchor: '#contact'
        },
    ]

    return (
        <>
            <nav>
                <h3>Hung Kieu<span></span></h3>
                <ul>
                    {links.map(link => (<li key={link.id}><a href={link.anchor}>{link.name}</a></li>))}
                    <li onClick={() => setBurgerMenu(true)}><IconMenu2 className="mobile-menu" width={32}
                                                                       height={32}></IconMenu2></li>
                </ul>
            </nav>
            <div className={`burger-menu ${burgerMenu ? "open-menu" : "close-menu"}`}>
                <span onClick={() => setBurgerMenu(false)}><IconX width={30} height={30}></IconX></span>
                <ul>
                    {links.map(link => (
                        <li key={link.id}><a onClick={() => setBurgerMenu(false)} href={link.anchor}>{link.name}</a>
                        </li>))}
                </ul>
            </div>
        </>);
}

export default NavBar;