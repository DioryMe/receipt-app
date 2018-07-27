import * as React from 'react';
import { Link } from 'react-router-dom'
import { DiographStore } from 'diograph-store'

// export interface ReceiptFormProps { modelId: string, editMode: string }
// export class ReceiptForm extends React.Component<ReceiptFormProps & RouteProps> {

export class ReceiptForm extends React.Component<any, any> {

  constructor(props) {
    super(props)
    this.state = { editMode: true }
  }

  render() {
    let editModeBlock
    if (this.state.editMode) {
      editModeBlock = (
        <div>
          <div>---</div>
          <div>Add upload receipt image</div>
          <div>Add place</div>
          <div>Add product</div>
        </div>
      )
    } else {
      editModeBlock = (
        <div>
          <div>---</div>
          <div>No image available</div>
          <div>No place</div>
          <div>No product</div>
        </div>
      )
    }

    return (
      <div>
        <div><Link to="/">(Home)</Link></div>
        <div>ReceiptForm</div>
        <div>{this.props.match.params.id}</div>
        <div onClick={ event => this.toggleEditMode(event)}>Edit mode</div>
        {editModeBlock}
      </div>
    )
  }

  toggleEditMode(event) {
    this.setState({editMode: !this.state.editMode})
  }

}

export class PlaceForm extends React.Component<any> {

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div>
        <div><Link to="/">(X)</Link></div>
        <div>PlaceForm</div>
        <div>{this.props.match.params.id}</div>
      </div>
    )
  }

}

export class ProductForm extends React.Component<any> {

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div>
        <div><Link to="/">(X)</Link></div>
        <div>ProductForm</div>
        <div>{this.props.match.params.id}</div>
      </div>
    )
  }

}
