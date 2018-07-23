import * as React from 'react'
import { Switch, Route } from 'react-router-dom'

import { Main } from './main'
import { ReceiptForm, PlaceForm, ProductForm } from './forms'

export interface ReceiptAppState { }
export interface ReceiptAppProps { }

export class DiographReceiptApp extends React.Component<ReceiptAppProps, ReceiptAppState> {

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div>
        <Switch>
          <Route path='/receipt' component={ReceiptForm}/>
          <Route path='/place' component={PlaceForm}/>
          <Route path='/product' component={ProductForm}/>
          <Route component={Main}/>
        </Switch>
      </div>
    )
  }

}
