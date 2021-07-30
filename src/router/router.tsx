import { FC } from 'react'
import { Route, Switch } from 'react-router'

import {
  Home,
} from '../pages'

export const Miss: FC = () => {
  return <div>WRONG URL</div>
}

const Router: FC = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route component={Miss} />
  </Switch>
)

export default Router
