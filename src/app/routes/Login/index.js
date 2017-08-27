import { connect } from 'react-redux'
import { loginUser, resetForm } from '../../modules/User'
import Login from './Login'
import './Login.scss'

const mapActionCreators = {
    loginUser,
    resetForm
}

const mapStateToProps = ({
    User: { currentUser, firebaseMessage }
}) => ({
    currentUser,
    firebaseMessage
})

export default connect(mapStateToProps, mapActionCreators)(Login)
