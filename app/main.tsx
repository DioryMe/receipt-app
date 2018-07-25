import * as React from 'react';
import { Link } from 'react-router-dom'

export class Main extends React.Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div>
        <div>
          <Link to="/receipt/new">Create new</Link>
        </div>
        <div>
        </div>
        <div>
          <ul>
            <li><Link to="/product/123-abc">Product 1</Link></li>
            <li><Link to="/receipt/123-abc">Receipt 1</Link></li>
            <li><Link to="/place/123-abc">Place 1</Link></li>
          </ul>
        </div>
      </div>
    )
  }

}
