import React, { Component } from 'react'
import classnames from 'classnames'

export default class ItemInput extends Component {

  state = {
    text: this.props.text || ''
  }

  handleChange = e => {
    this.setState({ text: e.target.value })
  }

  handleSubmit = e => {
    const text = e.target.value.trim()
    if (e.which === 13) {
      //on enter save
      this.props.onSave(text)
      if (this.props.newItem) {
        this.setState({ text: '' })
      }
    }
  }

  handleBlur = e => {
    if (!this.props.newItem) {
      this.props.onSave(e.target.value)
    }
  }

  render() {
    return (
      <input
        type="text"
        className={
          classnames({
            edit: this.props.editing,
            'new-item': this.props.newItem
          })}
        placeholder={this.props.placeholder}
        value={this.state.text}
        onChange={this.handleChange}
        onKeyDown={this.handleSubmit}
        onBlur={this.handleBlur}
      />
    )
  }
}
