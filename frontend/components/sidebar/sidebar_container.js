import {connect} from 'react-redux';
import Sidebar from './sidebar';

const mapStateToProps = ({session}) => ({
	currentUser: session.currentUser
})


export default connect(
	mapStateToProps,
	null
	)(Sidebar)