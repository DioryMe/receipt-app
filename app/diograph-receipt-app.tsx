import * as React from 'react'
import { Switch, Route } from 'react-router-dom'

import { Main } from './main'
import { ReceiptForm, PlaceForm, ProductForm } from './forms'

export interface ReceiptAppProps { }
export interface ReceiptAppState { }

export class DiographReceiptApp extends React.Component<ReceiptAppProps, ReceiptAppState> {

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div>
        <Switch>
          <Route path='/receipt/:id' component={ReceiptForm} />
          <Route path='/place/:id' component={PlaceForm}/>
          <Route path='/product/:id' component={ProductForm}/>
          <Route component={Main}/>
        </Switch>
      </div>
    )
  }

}
