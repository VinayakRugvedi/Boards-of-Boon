import React from 'react'
import './CardDetail.css'

class CardDetail extends React.Component {
  constructor(props) {
    super(props)
    this.toggleDisplay = this.toggleDisplay.bind(this)
  }

  toggleDisplay() {
    this.props.toggleHidden()
  }

  render() {
    return (
      <div className="cardModalWindowBG" style={{display : this.props.isHidden}}>
        <div className="cardModalWindow">
          <div className="closeIt" onClick={this.toggleDisplay}>&times;</div>
          <div className="contentContainer">
            <div className="cardNameContainer">
              <p>Name</p>
              <input/>
            </div>
            <div className="cardDescriptionContainer">
              <p>Description</p>
              <textarea></textarea>
            </div>
            <div className="dueDateContainer">
              <p>Due-Date</p>
              <input/>
            </div>
            <div className="cardLabelContainer">
              <p>Label</p>
              <span className="whiteLabel"></span>
              <span className="greenLabel"></span>
              <span className="redLabel"></span>
              <span className="blueLabel"></span>
              <span className="yellowLabel"></span>
            </div>
          </div>
          <div className="saveChanges">
            <button title="Save all the changes made to this card">SAVE</button>
          </div>
        </div>
      </div>
    )
  }
}
export default CardDetail
