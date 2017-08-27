import { connect } from 'react-redux'
import { changePassword, resetForm } from '../../../../modules/User'
import ChangePassword from './ChangePassword'

const mapActionCreators = {
    changePassword,
    resetForm
}
const mapStateToProps = ({
    User: {
        firebaseMessage
    }
}) => ({
    firebaseMessage
})

export default connect(mapStateToProps, mapActionCreators)(ChangePassword);
