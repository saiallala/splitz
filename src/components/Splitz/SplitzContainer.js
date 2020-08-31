import { connect } from 'react-redux';
import SplitzView from './SplitzView';
import {toggle} from '../../State_Management/modules/modalToggle';

const mapStateToProps = state => ({
    toggle: state.view,
})

const mapDispatchToProps = {
    toggle,
}
export default connect(mapStateToProps, mapDispatchToProps)(SplitzView);
