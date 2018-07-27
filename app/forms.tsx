import * as React from 'react';
import { Link } from 'react-router-dom'
import { DiographStore } from 'diograph-store'

// export interface ReceiptFormProps { modelId: string, editMode: string }
// export class ReceiptForm extends React.Component<ReceiptFormProps & RouteProps> {

export class ReceiptForm extends React.Component<any, any> {

  constructor(props) {
    super(props)
    let model = {
      id: this.props.match.params.id,
      name: "New diory",
      type: "receipt",
      date: "2018-04-12"
    }
    this.state = { editMode: true, model: model }
  }

  render() {

    if(this.state.editMode) {
      let headerBlock = <i onClick={ event => this.toggleEditMode(event)}>(Edit mode OFF)</i>
    } else {
      let headerBlock = (<div>
        <Link to="/">(Home)</Link> ---&nbsp;
        <i onClick={ event => this.toggleEditMode(event)}>(Edit mode ON)</i>
      </div>)
    }

    let uploadBlock = this.state.editMode ? <div>DiographUpload component</div> : <div>No image available</div>

    let nameBlock = this.state.editMode ? <input defaultValue={this.state.model.name} /> : this.state.model.name
    let dateBlock = this.state.editMode ? <input defaultValue={this.state.model.date} /> : this.state.model.date

    let placeBlock = this.state.editMode ? <div>SearchCreate for Place</div> : <div>No place for this receipt</div>

    let productBlock = this.state.editMode ? <div>SearchCreate for Product</div> : <div>No place for this receipt</div>

    return (
      <div>
        {headerBlock}
        <div>---</div>
        {uploadBlock}
        <div>---</div>
        <div>ID: {this.props.match.params.id}</div>
        <div>NAME: {nameBlock}</div>
        <div>DATE: {dateBlock}</div>
        <div>---</div>
        {placeBlock}
        <div>---</div>
        {productBlock}
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
