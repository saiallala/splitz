import React, { Component } from 'react';

class Intrest extends Component {
    constructor(props) {
        super(props)

        this.state = {
            counter: 0
        }
    }

    counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'inc':
                this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
                break;
            case 'dec':
                this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
                break;
        }
    }

    render () {
        return (
            <div data-test="component-intrest">
                <div className="CounterOutput" data-test="component-display">
                    Current Counter: {this.state.counter} 
                </div>
                <button data-test="component-increment-button" label="Increment" onClick={() => this.counterChangedHandler( 'inc' )} />
                <button data-test="component-decrement-button" label="Decrement" onClick={() => this.counterChangedHandler( 'dec' )}  />
            </div>
        );
    }
}

export default Intrest;