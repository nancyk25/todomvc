import React from 'react'
import ItemInput from './ItemInput'


const Header = ({ addState }) => (
  <div className="container">
    <header className="header">
      <h1>My State List</h1>
    </header>
    <ItemInput
      newItem
      placeholder={"Add a new state"}
      onSave={(text) => {
        if (text.length !== 0) {
          addState(text)
        }
      }}
    />
  </div>
)


export default Header


