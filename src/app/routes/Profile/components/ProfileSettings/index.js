import { connect } from 'react-redux';
import { updateUser } from '../../../../modules/User'
import ProfileSettings from './ProfileSettings'

const mapDispatchToProps = {
  updateUser
}

const mapStateToProps = ({
  User: { currentUser }
}) => ({
  currentUser
})

export default connect(mapStateToProps, mapDispatchToProps)(ProfileSettings);
