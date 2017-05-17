import { connect } from 'react-redux';
import Sidebar from './sidebar';
import { logout } from '../../actions/session_actions';


const mapStateToProps = ({session}) => ({
	currentUser: session.currentUser
})


export default connect(
	mapStateToProps,
	null
	)(Sidebar)