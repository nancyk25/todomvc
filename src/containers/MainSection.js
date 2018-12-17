import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as ReduxActions from '../actions'
import ItemList from '../components/ItemList'


const showAllStateIds = (state) => state.stateItems.map(item =>
  item.id)

const mapStateToProps = state => ({
  stateItems: state.stateItems,
  stateIds: showAllStateIds(state)
})


const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ReduxActions, dispatch)
})

const MainSection = connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemList)

export default MainSection
