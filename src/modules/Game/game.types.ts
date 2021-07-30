import {
  CLEAN_GAME,
  MINE_BAR_REQUEST,
  MINE_BAR_SUCCESS,
  MINE_BAR_ERROR,
  MINE_FOO_REQUEST,
  MINE_FOO_ERROR,
  MINE_FOO_SUCCESS,
  ASSEMBLE_FOOBAR_REQUEST,
  ASSEMBLE_FOOBAR_SUCCESS,
  ASSEMBLE_FOOBAR_ERROR, ROBOT_BOUGHT_REQUEST, ROBOT_BOUGHT_SUCCESS, ROBOT_BOUGHT_ERROR,
} from 'modules/Game/game.constants'

import { RobotType } from '../Robot/robot.types'

/* State types */
export type GameStateType = {
  foo: number
  bar: number
  foobar: number
}

export type GameState = {
  loading: boolean
  error?: Error[]
  gameState: GameStateType
}

/* Action types */

export type ExampleAction =
  | MineFooRequestAction
  | MineFooSuccessAction
  | MineFooErrorAction
  | MineBarRequestAction
  | MineBarSuccessAction
  | MineBarErrorAction
  | AssembleFoobarRequestAction
  | AssembleFoobarSuccessAction
  | AssembleFoobarErrorAction
  | RobotBoughtRequestAction
  | RobotBoughtSuccessAction
  | RobotBoughtErrorAction
  | CleanExampleAction
export type ExampleActionType =
  | MineFooRequestType
  | MineFooSuccessType
  | MineFooErrorType
  | MineBarRequestType
  | MineBarSuccessType
  | MineBarErrorType
  | AssembleFoobarRequestType
  | AssembleFoobarSuccessType
  | AssembleFoobarErrorType
  | RobotBoughtRequestType
  | RobotBoughtSuccessType
  | RobotBoughtErrorType
  | CleanExampleType
export type ExampleActionPayload =
  | MineFooRequestPayload
  | MineFooSuccessPayload
  | MineFooErrorPayload
  | MineBarRequestPayload
  | MineBarSuccessPayload
  | MineBarErrorPayload
  | AssembleFoobarRequestPayload
  | AssembleFoobarSuccessPayload
  | AssembleFoobarErrorPayload
  | RobotBoughtRequestPayload
  | RobotBoughtSuccessPayload
  | RobotBoughtErrorPayload
  | undefined

// MINE FOO
export type MineFooRequestType = typeof MINE_FOO_REQUEST
export type MineFooRequestPayload = { robot: RobotType }
export type MineFooRequestAction = {
  type: MineFooRequestType
  payload: MineFooRequestPayload
}

export type MineFooSuccessType = typeof MINE_FOO_SUCCESS
export type MineFooSuccessPayload = RobotType
export type MineFooSuccessAction = {
  type: MineFooSuccessType
  payload: MineFooSuccessPayload
}

export type MineFooErrorType = typeof MINE_FOO_ERROR
export type MineFooErrorPayload = Error
export type MineFooErrorAction = {
  type: MineFooErrorType
  payload: MineFooErrorPayload
}

// MINE BAR
export type MineBarRequestType = typeof MINE_BAR_REQUEST
export type MineBarRequestPayload = { robot: RobotType }
export type MineBarRequestAction = {
  type: MineBarRequestType
  payload: MineBarRequestPayload
}

export type MineBarSuccessType = typeof MINE_BAR_SUCCESS
export type MineBarSuccessPayload = RobotType
export type MineBarSuccessAction = {
  type: MineBarSuccessType
  payload: MineBarSuccessPayload
}

export type MineBarErrorType = typeof MINE_BAR_ERROR
export type MineBarErrorPayload = Error
export type MineBarErrorAction = {
  type: MineBarErrorType
  payload: MineBarErrorPayload
}

// ASSEMBLE FOOBAR
export type AssembleFoobarRequestType = typeof ASSEMBLE_FOOBAR_REQUEST
export type AssembleFoobarRequestPayload = { robot: RobotType }
export type AssembleFoobarRequestAction = {
  type: AssembleFoobarRequestType
  payload: AssembleFoobarRequestPayload
}

export type AssembleFoobarSuccessType = typeof ASSEMBLE_FOOBAR_SUCCESS
export type AssembleFoobarSuccessPayload = {
  foo: number
  bar: number
  foobar: number
}
export type AssembleFoobarSuccessAction = {
  type: AssembleFoobarSuccessType
  payload: AssembleFoobarSuccessPayload
}

export type AssembleFoobarErrorType = typeof ASSEMBLE_FOOBAR_ERROR
export type AssembleFoobarErrorPayload = Error
export type AssembleFoobarErrorAction = {
  type: AssembleFoobarErrorType
  payload: AssembleFoobarErrorPayload
}


// ROBOT BOUGHT
export type RobotBoughtRequestType = typeof ROBOT_BOUGHT_REQUEST
export type RobotBoughtRequestPayload = undefined
export type RobotBoughtRequestAction = {
  type: RobotBoughtRequestType
  payload: RobotBoughtRequestPayload
}

export type RobotBoughtSuccessType = typeof ROBOT_BOUGHT_SUCCESS
export type RobotBoughtSuccessPayload = {
  foo: number
  bar: number
  foobar: number
}
export type RobotBoughtSuccessAction = {
  type: RobotBoughtSuccessType
  payload: RobotBoughtSuccessPayload
}

export type RobotBoughtErrorType = typeof ROBOT_BOUGHT_ERROR
export type RobotBoughtErrorPayload = Error
export type RobotBoughtErrorAction = {
  type: RobotBoughtErrorType
  payload: RobotBoughtErrorPayload
}

export type CleanExampleType = typeof CLEAN_GAME
export type CleanExampleAction = {
  type: CleanExampleType
}

export type GameErrorAction = MineBarErrorAction | MineFooErrorAction | AssembleFoobarErrorAction | RobotBoughtErrorAction
