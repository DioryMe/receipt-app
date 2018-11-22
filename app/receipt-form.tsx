import * as React from 'react';
import { Link } from 'react-router-dom'
import { DiographStore } from 'diograph-store'
import { DiographSearchCreate } from "diograph-search-create"
import { DiographUpload } from "diograph-upload"

// export interface ReceiptFormProps { modelId: string, editMode: string }
// export class ReceiptForm extends React.Component<ReceiptFormProps & RouteProps> {

export class ReceiptForm extends React.Component<any, any> {

  constructor(props) {
    super(props)

    let editMode = this.props.match.params.edit ? true : false

    this.state = { editMode: editMode}
  }

  componentWillMount() {
    // DiographStore.getDiory(this.props.match.params.id).then(diory => {
      // TODO: Remove this when DiographStore.getDiory() is implemented in componentWillMount
      let diory = {
        id: this.props.match.params.id,
        name: "New diory",
        type: "receipt",
        date: "2018-04-12"
      }
      this.setState({model: diory})
    // })
  }

  render() {
    let headerBlock
    if(this.state.editMode) {
      headerBlock = <i onClick={ event => this.toggleEditMode(event)}>(Edit mode OFF)</i>
    } else {
      headerBlock = (<div>
        <Link to="/">(Home)</Link> ---&nbsp;
        <i onClick={ event => this.toggleEditMode(event)}>(Edit mode ON)</i>
      </div>)
      // TODO: Toggle via changing route instead of toggleEditMode
      // <Link to={`/receipt/${this.state.model.id}`}>(Edit mode OFF)</Link>
      // <Link to={`/receipt/${this.state.model.id}/edit`}>(Edit mode ON)</Link>
      // => with my first attempt: changed only route but didn't toggle edit mode...
    }

    let uploadBlock = this.state.editMode ? <DiographUpload secrets={{master: "testtoken"}}></DiographUpload> : <div>No image available</div>

    let nameBlock = this.state.editMode ? <input defaultValue={this.state.model.name} /> : this.state.model.name
    let dateBlock = this.state.editMode ? <input defaultValue={this.state.model.date} /> : this.state.model.date

    let placeBlock = this.state.editMode ? <DiographSearchCreate></DiographSearchCreate> : <div>No place for this receipt</div>

    let productBlock = this.state.editMode ? <DiographSearchCreate></DiographSearchCreate> : <div>No products for this receipt</div>

    return (
      <div>
        {headerBlock}
        <div>---</div>
        {uploadBlock}
        <div>---</div>
        <div>ID: {this.props.match.params.id}</div>
        <div id="name">NAME: {nameBlock}</div>
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
