import * as React from 'react';
import { Link } from 'react-router-dom'

export class Create extends React.Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div>
        <div>
          <Link to="/receipt">Receipt</Link>
        </div>
        <div>
          <Link to="/place">Place</Link>
        </div>
        <div>
          <Link to="/product">Product</Link>
        </div>
      </div>
    )
  }

}
