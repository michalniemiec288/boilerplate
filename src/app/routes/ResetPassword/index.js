import { connect } from 'react-redux'
import ResetPassword from './ResetPassword'
import { resetPasswordEmail, resetForm } from '../../modules/User'

const mapActionCreators = {
    resetPasswordEmail,
    resetForm
}

const mapStateToProps = ({
    User: { firebaseMessage }
}) => ({
    firebaseMessage
})

export default connect(mapStateToProps, mapActionCreators)(ResetPassword);
