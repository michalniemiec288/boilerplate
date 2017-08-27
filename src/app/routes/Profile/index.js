import { connect } from 'react-redux'
import Profile from './Profile'

const mapDispatchToProps = {}

const mapStateToProps = ({
  User: { currentUser, firebaseMessage }
}) => ({
  currentUser,
  firebaseMessage
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
