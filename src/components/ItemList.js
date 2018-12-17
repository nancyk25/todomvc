import React from 'react'
import Item from './Item'

const ItemList = ({ stateItems, actions, stateIds }) => (
  <section className="main">
    <ul className="todo-list">
      {stateItems.map(item =>
        <Item key={item.id} state={item} {...actions} stateIds={stateIds} />
      )}
    </ul>
  </section>
)

export default ItemList
