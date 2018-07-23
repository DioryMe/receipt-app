import * as React from 'react';
import { Switch, Route, Link } from 'react-router-dom'

import { Create } from './create'
import { Search } from './search'

export class Main extends React.Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div>

        <div>
          <Link to="/">Create</Link>
        </div>
        <div>
          <Link to="/search">Search</Link>
        </div>

        <div>
          <Switch>
            <Route exact path='/' component={Create}/>
            <Route path='/search' component={Search}/>
          </Switch>
        </div>
      </div>
    )
  }

}
