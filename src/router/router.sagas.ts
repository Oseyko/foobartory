import { fork, ForkEffect, put, takeLatest } from 'redux-saga/effects'
import { push } from 'connected-react-router'

import { NavigateToRequestAction } from './router.types'
import { NAVIGATE_TO_REQUEST } from './router.constants'

export function* navigateWorker(action: NavigateToRequestAction): Generator {
  try {
    const { payload } = action
    const { path } = payload
    yield put(push(path))
    return null
  } catch (error) {
    return error
  }
}

export function* navigateWatcher(): Generator {
  yield takeLatest(NAVIGATE_TO_REQUEST, navigateWorker)
}

export const navigateWatchers: ForkEffect[] = [fork(navigateWatcher)]
