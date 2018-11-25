import {connect} from 'react-redux';
import AuthForm from './auth_form';
import {login,signup} from '../../actions/auth_actions';

const mapStateToProps = (state) => (
  {
    errors: state.errors.auth

  }
)

const mapDispatchToProps = (dispatch, ownProps) => {
  const formType = ownProps.location.pathname.slice(1);
  const processForm = (formType === 'login') ? login: signup;

  return {
    formType,
    processForm: (user) => dispatch(processForm(user))

  }
}
export default connect(mapStateToProps, mapDispatchToProps)(AuthForm);
