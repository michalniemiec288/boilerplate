import { connect } from 'react-redux'
import Register from './Register'
import { registerUser, resetForm } from '../../modules/User'

const mapActionCreators = {
    registerUser,
    resetForm
}

const mapStateToProps = ({
    User: { currentUser, firebaseMessage }
}) => ({
    currentUser,
    firebaseMessage
})

export default connect(mapStateToProps, mapActionCreators)(Register)
