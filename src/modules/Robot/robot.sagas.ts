import { fork, ForkEffect, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { v4 as uuid } from 'uuid'

import {
  ADD_NEW_ROBOT_ERROR,
  ADD_NEW_ROBOT_REQUEST,
  ADD_NEW_ROBOT_SUCCESS,
  SET_ROBOT_ACTIVE_ERROR,
  SET_ROBOT_ACTIVE_REQUEST,
  SET_ROBOT_ACTIVE_SUCCESS,
  SET_ROBOT_ACTIVITY_ERROR,
  SET_ROBOT_ACTIVITY_REQUEST,
  SET_ROBOT_ACTIVITY_SUCCESS,
} from './robot.constants'
import { robotAction } from './robot.actions'
import { RobotType, SetRobotActiveRequestAction, SetRobotActivityRequestAction } from './robot.types'
import { gameAction } from '../Game/game.actions'
import { ROBOT_BOUGHT_REQUEST } from '../Game/game.constants'

// ADD NEW ROBOT SAGA WORKER AND WATCHER
export function* addNewRobotWorker(): Generator {
  try {
    const newRobot: RobotType = {
      id: uuid(),
      isActive: false,
      activity: null,
    }
    yield put(robotAction(ADD_NEW_ROBOT_SUCCESS, newRobot))
    yield put(gameAction(ROBOT_BOUGHT_REQUEST, undefined))
    return newRobot
  } catch (error) {
    yield put(robotAction(ADD_NEW_ROBOT_ERROR, error))
    return error
  }
}

export function* addNewRobotWatcher(): Generator {
  yield takeLatest(ADD_NEW_ROBOT_REQUEST, addNewRobotWorker)
}

// SET ROBOT ACTIVE STATUS SAGA WORKER AND WATCHER
export function* setRobotActiveWorker(action: SetRobotActiveRequestAction): Generator {
  try {
    const { payload } = action
    const { robot, isActive } = payload
    const updatedRobot = {
      ...robot,
      isActive,
    }
    yield put(robotAction(SET_ROBOT_ACTIVE_SUCCESS, updatedRobot))
    return payload
  } catch (error) {
    yield put(robotAction(SET_ROBOT_ACTIVE_ERROR, error))
    return error
  }
}

export function* setRobotActiveWatcher(): Generator {
  yield takeLatest(SET_ROBOT_ACTIVE_REQUEST, setRobotActiveWorker)
}

// SET ROBOT ACTIVITY SAGA WORKER AND WATCHER
export function* setRobotActivityWorker(action: SetRobotActivityRequestAction): Generator {
  try {
    const { payload } = action
    const { robot, activity } = payload
    const newRobot = {
      ...robot,
      isActive: true,
      activity,
    }
    yield put(robotAction(SET_ROBOT_ACTIVITY_SUCCESS, newRobot))
    return newRobot
  } catch (error) {
    yield put(robotAction(SET_ROBOT_ACTIVITY_ERROR, error))
    return error
  }
}

export function* setRobotActivityWatcher(): Generator {
  yield takeEvery(SET_ROBOT_ACTIVITY_REQUEST, setRobotActivityWorker)
}
/**
 * Global Export for the Robots's watchers
 */
export const robotWatchers: ForkEffect[] = [
  fork(addNewRobotWatcher),
  fork(setRobotActiveWatcher),
  fork(setRobotActivityWatcher),
]
