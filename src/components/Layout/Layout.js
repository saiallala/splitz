import React, {Component} from 'react'
import Toolbar from '../Navigation/Toolbar/Toolbar';

import './Layout.scss'
class Layout extends Component{
    
    state = {
        showSideDrawer: true,

    }

    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false})
    }

    sideDrawerToggleHandler = () =>{
        this.setState((prevState) => {
            return {showSideDrawer: !prevState.showSideDrawer}
        });
    }
    
   render(){
        return (
        <>
            <Toolbar drawerTogggleClicked = {this.sideDrawerToggleHandler}/>    
            <main className = "content">
                {this.props.children}
            </main>
        </>
        );
    }
}
export default Layout;
