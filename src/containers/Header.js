import { connect } from 'react-redux'
import Header from '../components/Header'
import { addState } from '../actions'

export default connect(null, { addState })(Header)