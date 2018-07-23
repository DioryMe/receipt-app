import * as React from 'react';
import { Link } from 'react-router-dom'

export class ReceiptForm extends React.Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div>
        <div><Link to="/">(X)</Link></div>
        <div>ReceiptForm</div>
      </div>
    )
  }

}

export class PlaceForm extends React.Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div>
        <div><Link to="/">(X)</Link></div>
        <div>PlaceForm</div>
      </div>
    )
  }

}

export class ProductForm extends React.Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div>
        <div><Link to="/">(X)</Link></div>
        <div>ProductForm</div>
      </div>
    )
  }

}
