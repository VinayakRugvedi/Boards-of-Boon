import React from 'react'
import './List.css'
import Card from '../Card/Card.js'

class List extends React.Component {
  constructor() {
    super()
  }

  deleteThisList() {

  }

  addNewCard() {

  }

  render() {
    return (
      <div className="listContainer">
        <div className="deleteThisList" title="Delete this entire List" onClick={this.deleteThisList}>&times;</div>
        <div className="cardComponents">
          <Card/>
          <Card/>
        </div>
        <div className="addNewCard" title="Add a Card to this List" onClick={this.addNewCard}>&#43;</div>
      </div>
    )
  }
}

export default List
