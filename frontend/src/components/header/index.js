import {connect} from 'react-redux';
import Header from './header';
import {receiveCurrentUser} from '../../actions/auth_actions';

const mapStateToProps = (state) => (
  {
    loggedIn: Boolean(state.auth.user)

  }
)

const mapDispatchToProps = (dispatch, ownProps) => (

  {
    logout: () => dispatch(receiveCurrentUser(null))
  }
)
export default connect(mapStateToProps, mapDispatchToProps)(Header);
