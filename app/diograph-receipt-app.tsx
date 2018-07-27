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
