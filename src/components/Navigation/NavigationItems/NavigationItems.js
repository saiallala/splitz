import React from 'react';
import './NavigationItems.css'
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => {
    return (
        <ul className = "NavigationItems">
            <NavigationItem link = "/"> Spliitz</NavigationItem>
            <NavigationItem link = "/requests"> Requests</NavigationItem>
            <NavigationItem link = "/addNewBill"> Add New Bill</NavigationItem>
            <NavigationItem link = "/intrest"> Intrest</NavigationItem>
        </ul>
    );
}
export default navigationItems;