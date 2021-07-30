import { v4 as uuid } from 'uuid'

import {
  ADD_NEW_ROBOT_ERROR,
  ADD_NEW_ROBOT_SUCCESS,
  CLEAN_ROBOT, SET_ROBOT_ACTIVE_ERROR,
  SET_ROBOT_ACTIVE_SUCCESS, SET_ROBOT_ACTIVITY_ERROR,
  SET_ROBOT_ACTIVITY_SUCCESS,
} from './robot.constants'
import {
  AddNewRobotSuccessAction,
  RobotAction, RobotErrorAction,
  RobotState,
  SetRobotActiveSuccessAction,
  SetRobotActivitySuccessAction,
} from './robot.types'

/**
 * Initial RobotState
 */
export const initRobotState: RobotState = {
  loading: false,
  robots: [
    {
      id: uuid(),
      isActive: false,
      activity: null,
    },

    {
      id: uuid(),
      isActive: false,
      activity: null,
    },
  ],
}

/**
 * ADD new robot form action payload to the robots state array
 * @param state
 * @param action
 */
function addNewRobot(state: RobotState, action: AddNewRobotSuccessAction): RobotState {
  const { payload } = action
  return {
    ...state,
    loading: false,
    robots: [...state.robots, payload],
  }
}

/**
 * Update the robot in state with data from action payload based on id
 * @param state
 * @param action
 */
function updateRobot(
  state: RobotState,
  action: SetRobotActiveSuccessAction | SetRobotActivitySuccessAction
): RobotState {
  const { payload } = action
  const robotToUpdateIndex = state.robots.findIndex(currentRobot => currentRobot.id === payload.id)
  const newRobots = [...state.robots]
  newRobots[robotToUpdateIndex] = payload
  return {
    ...state,
    robots: [...newRobots],
  }
}

/**
 * initialize or add error to the game redux state error array
 * @param state
 * @param action
 */
function setError(state: RobotState, action: RobotErrorAction): RobotState {
  const { payload } = action

  // Create array of error if it doesn't exists or update it
  const newErrors = state.error ? [...state.error, payload] : [payload]
  return {
    ...state,
    loading: false,
    error: newErrors,
  }
}

/**
 * Clean RobotState to it initial values
 */
function clean(): RobotState {
  return initRobotState
}

/**
 * Robot reducer constructor
 * @param state
 * @param action
 * @constructor
 */

export const robotReducer = (
  state: RobotState = initRobotState,
  action: RobotAction
): RobotState => {
  switch (action.type) {
    case ADD_NEW_ROBOT_SUCCESS:
      return addNewRobot(state, action)
    case ADD_NEW_ROBOT_ERROR:
      return setError(state, action)
    case SET_ROBOT_ACTIVE_SUCCESS:
      return updateRobot(state, action)
    case SET_ROBOT_ACTIVE_ERROR:
      return setError(state, action)
    case SET_ROBOT_ACTIVITY_SUCCESS:
      return updateRobot(state, action)
    case SET_ROBOT_ACTIVITY_ERROR:
      return setError(state, action)
    case CLEAN_ROBOT:
      return clean()
    default:
      return {
        ...state,
      }
  }
}
