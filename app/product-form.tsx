import * as React from 'react';
import { Link } from 'react-router-dom'
import { DiographStore } from 'diograph-store'

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
