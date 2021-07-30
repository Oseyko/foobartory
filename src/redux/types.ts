import { Action } from 'redux'

import { GameState } from '../modules/Game/game.types'
import { RobotState } from '../modules/Robot/robot.types'

// Override Action for differentiation between each module actions
// eslint-disable-next-line
export interface RootAction<T = string, P = any> extends Action {
  type: T
  payload: P
}

// Main redux state definition,
export interface RootState {
  example: GameState
  robot: RobotState
}
