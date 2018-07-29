import * as React from 'react';
import { Redirect, Link } from 'react-router-dom'
import { DiographStore } from 'diograph-store'

export class Main extends React.Component<any, any> {

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    if (this.state.newReceiptId) {
      return <Redirect push to={`/receipt/${this.state.newReceiptId}/edit`} />
    }

    return (
      <div>
        <button style={{margin: "10px"}} onClick={event => this.createNewAndRedirect()}>Create new receipt</button>
        <div>
        </div>
        <div>
          <ul>
            <li><Link to="/product/123-abc">Product 1</Link></li>
            <li><Link to="/receipt/123-abc">Receipt 1</Link></li>
            <li><Link to="/receipt/123-abc/edit">Receipt 2 (EDIT)</Link></li>
            <li><Link to="/place/123-abc">Place 1</Link></li>
          </ul>
        </div>
      </div>
    )
  }

  createNewAndRedirect() {
    // return DiographStore.createDiory({type: "receipt"}).then(diory => {
      let diory = {id: "abc-123"}
      console.log("New diory created (id: " + diory.id + ")")
      this.setState({newReceiptId: diory.id})
      return diory
    // })
  }
}
