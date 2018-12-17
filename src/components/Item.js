import React, { Component } from 'react'
import classnames from 'classnames'
import ItemInput from './ItemInput'

export default class Item extends Component {
  state = {
    editing: false
  }

  handleDoubleClick = () => {
    this.setState({ editing: true })
  }

  handleSave = (id, text) => {
    if (text.length === 0) {
      this.props.deleteState(id)
    } else {
      this.props.editState(id, text)
    }
    this.setState({ editing: false })
  }

  addLinkToState = (e) => {
    const { value } = e.target
    const { addLinkToState, state: { id } } = this.props
    addLinkToState(id, value)
  }

  render() {
    const {
      state: { references },
      deleteState,
      stateIds,
      state } = this.props

    let element
    if (this.state.editing) {
      console.log('edit mode', this.props.e)
      element = (
        <ItemInput
          text={state.text}
          editing={this.state.editing}
          onSave={(text) => this.handleSave(state.id, text)}
        />
      )
    } else {
      element = (
        <div className="view">
          <button className="destroy"
            onClick={() => deleteState(state.id)} />
          <label onDoubleClick={this.handleDoubleClick}>
            ID:{state.id} State: {state.text}
          </label>
          <div className="link-select-container">
            <select value={this.state.value} onChange={this.addLinkToState}>
              <option key={""} value={""}>
                Select state to link
            </option>
              {stateIds.map(id =>
                <option key={id} value={id}>
                  links to state {id}
                </option>
              )}
            </select>
          </div>
          <label onDoubleClick={this.handleDoubleClick}>
            Linked to: {[...references.join(",")]}
          </label>
        </div>
      )
    }

    return (
      <li className={classnames({
        editing: this.state.editing
      })}>
        {element}
      </li>
    )
  }
}
