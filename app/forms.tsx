import * as React from 'react';
import { Link } from 'react-router-dom'
import { DiographStore } from 'diograph-store'

// export interface ReceiptFormProps { receiptModel }

export class ReceiptForm extends React.Component<any> {

  constructor(props) {
    super(props)
    this.state = { }
  }

  render() {
    return (
      <div>
        <div><Link to="/">(Home)</Link></div>
        <div>ReceiptForm</div>
        <div>{this.props.match.params.id}</div>
      </div>
    )
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
