import React, {useState} from "react";
import "../styles/components/_navbar.scss"
import {IconMenu2} from "@tabler/icons-react";
import {IconX} from "@tabler/icons-react"

function NavBar() {

    const [burgerMenu, setBurgerMenu] = useState(false);

    const links = [{
        name: 'Home', anchor: '#home'
    }, {
        name: 'About', anchor: '#about'
    }, {
        name: 'Projects', anchor: '#projects'
    }, {
        name: 'Contact', anchor: '#contact'
    },]

    return (
        <>
            <nav>
                <h3>Hung Kieu</h3>
                <ul>
                    {links.map(link => (<li><a href={link.anchor}>{link.name}</a></li>))}
                    <li onClick={() => setBurgerMenu(true)}><IconMenu2 className="mobile-menu" width={32}
                                                                       height={32}></IconMenu2></li>
                </ul>
            </nav>
            <div className={`burger-menu ${burgerMenu ? "open-menu" : "close-menu"}`}>
                <span onClick={() => setBurgerMenu(false)}><IconX width={30} height={30}></IconX></span>
                <ul>
                    {links.map(link => (
                        <li><a onClick={() => setBurgerMenu(false)} href={link.anchor}>{link.name}</a></li>))}
                </ul>
            </div>
        </>);
}

export default NavBar;