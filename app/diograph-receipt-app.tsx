import * as React from 'react'
import { Switch, Route } from 'react-router-dom'

import { Main } from './main'
import { ReceiptForm } from './receipt-form'
import { PlaceForm } from './place-form'
import { ProductForm } from './product-form'

export interface ReceiptAppProps { }
export interface ReceiptAppState { }

export class DiographReceiptApp extends React.Component<ReceiptAppProps, ReceiptAppState> {

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    // TODO: We shouldn't need both: /:id & /:id/:edit
    // => don't know how to get /:id/:edit to match also with /receipt/123-abc
    return (
      <div>
        <Switch>
          <Route path='/receipt/:id/:edit' component={ReceiptForm} />
          <Route path='/receipt/:id' component={ReceiptForm} />
          <Route path='/place/:id/:edit' component={PlaceForm}/>
          <Route path='/place/:id' component={PlaceForm}/>
          <Route path='/product/:id/:edit' component={ProductForm}/>
          <Route path='/product/:id' component={ProductForm}/>
          <Route component={Main}/>
        </Switch>
      </div>
    )
  }

}
