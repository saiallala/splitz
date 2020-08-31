import React, {Component} from 'react';
import Modal from '../UI/Modal/Modal';
import Button from '../UI/Button/Button';
import PropTypes from 'prop-types';

import './Splitz.scss';
import AddNewBill from '../AddNewBill/AddNewBill';

const initialState = {
    viewNewBill: true,
}
/**s    
 * @component
 *
 */
class SplitzView extends Component {

    static propTypes = {
        viewNewBill: PropTypes.string
    }
    
    constructor(){
        super();
        this.state = {...initialState};
    }
    
    toggleNewBillHandler = () => {
        console.log(this.state.viewNewBill)
        this.state.viewNewBill ? this.setState({viewNewBill: false}) : this.setState({viewNewBill: true});
    }

    render(){

        return(
        <>
            <div className = "Splitz">  
                <h1>Home of the Application</h1>
            </div>
            <Button clicked = {() => this.toggleNewBillHandler()}> Add a Transaction </Button>
            <Modal show = {this.state.viewNewBill} modalClosed = {this.toggleNewBillHandler}> 
                <AddNewBill />
            </Modal>
        </>
    )}
}

export default SplitzView;
