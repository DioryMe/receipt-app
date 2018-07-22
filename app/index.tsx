import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { DiographReceiptApp } from './diograph-receipt-app'

ReactDOM.render((
  <BrowserRouter>
    <DiographReceiptApp />
  </BrowserRouter>
), document.getElementById('app'))
