import React from 'react';
import styled from "styled-components";
import MenuIcon from '@material-ui/icons/Menu';
import { linkData } from '../context/linkData';
import { Link } from "react-router-dom";

function Navbar() {

    const links = linkData;
    return (
        <NavbarWrapper>
            <div className="navbar">
                <div className="navbar__icon">
                    <MenuIcon />
                    <span>All</span>
                </div>
                <div className="nav__links">
                    {links.map(link => {
                        let id = link.id;
                        if (id !== links.length) {
                            return (
                                <li key={link.id} className="nav__link__a">
                                    <Link to={link.path} className="nav__link__b">
                                        {link.text}
                                    </Link>
                                </li>
                            )
                        } else {
                            return (
                                <li key={link.id} className="nav__link__a">
                                    <Link to={link.path} className="nav__link__b">
                                        {link.text}
                                    </Link>
                                </li>
                            )
                        }
                    })}
                </div>
            </div>
        </NavbarWrapper>
    )
}

export default Navbar

const NavbarWrapper = styled.nav`
position: sticky;
display: inline-flex;
align-items: center;
justify-content: space-between;
height: 39px;
width: 100%;
z-index: 100;
top: 0;
background-color: var( --amazonBlueBeacon);

.navbar{
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: space-evenly;
    margin: 0 20px;
    padding:3px;
    color: white;
    object-fit: contain;
}

.navbar__icon{
    display: inline-flex;
    margin-left: 7px;
    align-items: center;
    margin: 0 20px;
    padding:3px;
    color: white;
    object-fit: contain;
}

.navbar__icon:hover{
    box-sizing: border-box;
    border-color: white;
    border: 1.5px solid;
}

.nav__links{
    display: flex;
    color: white;
    align-items: center;
    justify-content: space-evenly;
    list-style-type: none;
}

.nav__link__a{
    display: flex;
    text-decoration: none;
    list-style-type: none;
    align-items: center;
    justify-content:flex-start;
    color: white;
}

.nav__link__b{
    text-decoration: none;
    list-style-type: none;
    color: white;
    margin: 0 12px;
    text-transform: capitalize;
    font-size: 15px;
}

`