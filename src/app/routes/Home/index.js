import { connect } from 'react-redux'
import Home from './Home'

const mapActionCreators = {}
const mapStateToProps = ({
  User: { currentUser },
}) => ({
  currentUser,
})

export default connect(mapStateToProps, mapActionCreators)(Home)
