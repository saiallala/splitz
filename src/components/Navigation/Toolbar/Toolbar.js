import React from 'react';
import './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems'
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
const toolbar = (props) => {
    return (
        <header className = "Toolbar">
             <nav className = "DesktopOnly">
                <NavigationItems />
            </nav>
            <Logo height = "80%"></Logo>
            <DrawerToggle 
                clicked = {props.drawerTogggleClicked}/>
        </header>
    );
}
 
export default toolbar;