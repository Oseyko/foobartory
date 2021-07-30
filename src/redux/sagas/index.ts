import { all } from 'redux-saga/effects'

import { exampleWatchers } from '../../modules/Game'
import { navigateWatchers } from '../../router/router.sagas'
import { robotWatchers } from '../../modules/Robot'

function* rootSagas(): Generator {
  // Combine each needed watchers here, that may come from any module
  const watchers = [...exampleWatchers, ...navigateWatchers, ...robotWatchers]
  // The "all" effect launches all the effects in parallel and wait for all of them to be completed. It's like a Promise.all
  yield all(watchers)
}

export default rootSagas
