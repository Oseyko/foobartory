import { fork, ForkEffect, put, takeEvery, takeLatest, select } from 'redux-saga/effects'

import { gameAction } from './game.actions'
import {
  ASSEMBLE_FOOBAR_ERROR,
  ASSEMBLE_FOOBAR_REQUEST,
  ASSEMBLE_FOOBAR_SUCCESS,
  MINE_BAR_ERROR,
  MINE_BAR_REQUEST,
  MINE_BAR_SUCCESS,
  MINE_FOO_ERROR,
  MINE_FOO_REQUEST,
  MINE_FOO_SUCCESS,
  ROBOT_BOUGHT_ERROR,
  ROBOT_BOUGHT_REQUEST,
  ROBOT_BOUGHT_SUCCESS,
} from './game.constants'
import { AssembleFoobarRequestAction, GameStateType, MineBarRequestAction, MineFooRequestAction } from './game.types'
import { gameStateSelector } from './game.selectors'


// ADD FOO SAGA WORKER AND WATCHER
export function* addFooWorker(action: MineFooRequestAction): Generator {
  try {
    const { payload } = action
    const { robot } = payload
    yield put(gameAction(MINE_FOO_SUCCESS, undefined))
    return robot
  } catch (error) {
    yield put(gameAction(MINE_FOO_ERROR, error))
    return error
  }
}

export function* addFooWatcher(): Generator {
  yield takeEvery(MINE_FOO_REQUEST, addFooWorker)
}

// ADD BAR SAGA WORKER AND WATCHER
export function* addBarWorker(action: MineBarRequestAction): Generator {
  try {
    const { payload } = action
    const { robot } = payload
    yield put(gameAction(MINE_BAR_SUCCESS, undefined))
    return robot
  } catch (error) {
    yield put(gameAction(MINE_BAR_ERROR, error))
    return error
  }
}

export function* addBarWatcher(): Generator {
  yield takeEvery(MINE_BAR_REQUEST, addBarWorker)
}


// ASSEMBLE FOOBAR SAGA WORKER AND WATCHER
export function* assembleFoobarWorker(action: AssembleFoobarRequestAction): Generator {
  try {

    const { payload } = action
    const { robot } = payload
    const currentGameState = (yield select(gameStateSelector)) as GameStateType
    const success = Math.random() < 0.6

    // default failure new state
    let updateGameState = {
      foo: -1,
      bar: 0,
      foobar: 0,
    }
    // Update new state on success
    if (success) {
      updateGameState = {
        foo: -1,
        bar: -1,
        foobar: 1,
      }
    }

    // Reset the new state if not enough resources to assemble a foobar
    if (currentGameState.foo < 1 || currentGameState.bar < 1) {
      updateGameState = {
        foo: 0,
        bar: 0,
        foobar: 0,
      }
    }
    yield put(gameAction(ASSEMBLE_FOOBAR_SUCCESS, updateGameState))
    return robot
  } catch (error) {
    yield put(gameAction(ASSEMBLE_FOOBAR_ERROR, error))
    return error
  }
}

export function* assembleFoobarWatcher(): Generator {
  yield takeEvery(ASSEMBLE_FOOBAR_REQUEST, assembleFoobarWorker)
}


// GAME STATE HANDLER ON ROBOT BOUGHT SAGA WORKER AND WATCHER
export function* robotBoughtWorker(): Generator {
  try {
    const updateGameState = {
      foo: -6,
      bar: 0,
      foobar: -3,
    }
    yield put(gameAction(ROBOT_BOUGHT_SUCCESS, updateGameState))
    return 1
  } catch (error) {
    yield put(gameAction(ROBOT_BOUGHT_ERROR, error))
    return error
  }
}

export function* robotBoughtWatcher(): Generator {
  yield takeLatest(ROBOT_BOUGHT_REQUEST, robotBoughtWorker)
}

/**
 * Global Export for the Game's watchers
 */
export const exampleWatchers: ForkEffect[] = [
  fork(addFooWatcher),
  fork(addBarWatcher),
  fork(assembleFoobarWatcher),
  fork(robotBoughtWatcher),
]
