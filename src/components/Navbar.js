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
                                <li key={link.id} className="nav__link__c">
                                    <Link to={link.path} className="nav__link__d">
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
position: -webkit-sticky;
position: fixed;
display: inline-flex;
align-items: center;

height: 39px;
width: 100%;
top: -1;
z-index: 100;
background-color: var( --amazonBlueBeacon);

.navbar{
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: space-evenly;
    padding:2px;
    color: white;
    object-fit: contain;
}

.navbar__icon{
    display: inline-flex;
    align-items: center;
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
    justify-content: space-between;
    list-style-type: none;
}

.nav__link__a{
    display: flex;
    text-decoration: none;
    list-style-type: none;
    align-items: center;
    margin-left: 14px;
    justify-content:flex-start;
    color: white;
}

.nav__link__b{
    text-decoration: none;
    list-style-type: none;
    color: white;
    margin: 0  8px;
    text-transform: capitalize;
    font-size: 14px;
    object-fit: contain;
}

.nav__link__d{
    text-decoration: none;
    list-style-type: none;
    color: white;
    margin-left: 250px;
    text-transform: capitalize;
    font-size: 15px;
}
.nav__link__a:hover{
    box-sizing: border-box;
    border-color: white;
    border: 1.5px solid;
}

.nav__link__d:hover{
    box-sizing: border-box;
    border-color: white;
    border: 1.5px solid;
}

`