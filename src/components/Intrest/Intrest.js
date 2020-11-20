import React, { Component } from 'react';
import NumberFormat from 'react-number-format'

class Intrest extends Component {

    render () {
        return (
            <NumberFormat 
            defaultValue={0.00}
            // customInput={TextInput} WFRIA TextInput
            fixedDecimalScale 
            allowEmptyFormatting
            thousandSeparator
            decimalScale={2} 
            suffix='%'
            value={0}
            />
        );
    }
}

export default Intrest;