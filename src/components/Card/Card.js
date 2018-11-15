import React from 'react'
import './Card.css'
import CardDetail from './CardDetail.js'

class Card extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isDisabled : false,
      isHidden : 'none'
    }
    this.toggleDisable = this.toggleDisable.bind(this)
    this.editing = this.editing.bind(this)
    this.finishEditing = this.finishEditing.bind(this)
    this.deleteThisCard = this.deleteThisCard.bind(this)
    this.toggleHidden = this.toggleHidden.bind(this)
  }

  deleteThisCard(event) {
    event.stopPropagation()
    this.props.updateCard(this.props.card)
  }

  toggleDisable(event) {
    event.stopPropagation()
    this.setState({
      isDisabled : !this.state.isDisabled
    })
  }

  editing(event) {
    let cardCopy = this.props.card
    cardCopy.name = event.target.value
    this.props.updateCard(cardCopy, false)
  }

  finishEditing(event) {
    if(event.which === 13) {
      this.setState({
        isDisabled : !this.state.isDisabled
      })
    }
  }

  toggleHidden(event) {
    this.state.isHidden
    ? this.setState({
      isHidden : ''
    })
    : this.setState({
      isHidden : 'none'
    })
  }

  render() {
    console.log(this.props.card.name, 'cname in cardjs')
    return (
      <React.Fragment>
      <div className="cardContainer" onClick={this.toggleHidden}>
        <div className="deleteThisCard" title="Delete this Card" onClick={this.deleteThisCard}>&times;</div>
        <div className="cardNameHolder">
          <input placeholder=" &#43; Add Card name" disabled={this.state.isDisabled} onChange={this.editing} onKeyUp={this.finishEditing} value={this.props.card.name} onClick={ (event) => event.stopPropagation()}/>
          <button className="toggleDisableButtonCard" title="EDIT this Card name" onClick={this.toggleDisable}>&#x270E;</button>
        </div>
        <div className="highlights">
          <div className="labelColor" title="Assigned Label Color" style={ { backgroundColor : this.props.card.label} }>
          </div>
          {
            this.props.card.description.length > 0
            ? <div className="descriptionIfAny" title="This Card has a Description">&#9776;</div>
            : ''
          }
          {
            this.props.card.dueDate.length > 0
            ? <div className="dueDate" title="The Card's due Date">
                { this.props.card.dueDate }
              </div>
            : ''
          }
          <div className="checklistItems" title="Checklist Items">10/10</div>
        </div>
      </div>
      <CardDetail isHidden = {this.state.isHidden} toggleHidden = {this.toggleHidden} card={this.props.card} updateCard={this.props.updateCard}/>
      </React.Fragment>
    )
  }
}

export default Card
