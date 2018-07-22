import * as React from 'react';

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
        Jeejee
      </div>
    )
  }

}
