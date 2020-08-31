import React from 'react';
import splitzLogo from '../../assets/images/SplitzLogo.jpg'; 
import './Logo.scss'

const logo = (props) =>  {
    return (
        <div className = "Logo" style={{height: props.height}}>
            <img src={splitzLogo} alt = "Logo"/>
        </div>
    );
}

export default logo;