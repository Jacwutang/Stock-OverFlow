import {connect} from 'react-redux';
import AuthForm from './auth_form';

const mapStateToProps = (state) => (
  {
    errors: state.errors.auth
  }
)

const mapDispatchToProps = (dispatch, ownProps) => ({

})
export default connect(mapStateToProps, mapDispatchToProps)(AuthForm);
