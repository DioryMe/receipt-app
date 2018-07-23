import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { HashRouter } from 'react-router-dom'
import { DiographReceiptApp } from './diograph-receipt-app'

ReactDOM.render((
  <HashRouter>
    <DiographReceiptApp />
  </HashRouter>
), document.getElementById('app'))
