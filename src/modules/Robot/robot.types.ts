import {
  ADD_NEW_ROBOT_ERROR,
  ADD_NEW_ROBOT_REQUEST,
  ADD_NEW_ROBOT_SUCCESS,
  CLEAN_ROBOT,
  SET_ROBOT_ACTIVE_ERROR,
  SET_ROBOT_ACTIVE_REQUEST,
  SET_ROBOT_ACTIVE_SUCCESS,
  SET_ROBOT_ACTIVITY_ERROR,
  SET_ROBOT_ACTIVITY_REQUEST,
  SET_ROBOT_ACTIVITY_SUCCESS,
} from 'modules/Robot/robot.constants'

/* State types */
export type ActivityType = {
  name: string
  duration: number
}

export type RobotType = {
  id: string
  activity: ActivityType | null
  isActive: boolean
}

export type RobotState = {
  loading: boolean
  error?: Error[]
  robots: RobotType[]
}

/* Action types */

export type RobotAction =
  | AddNewRobotRequestAction
  | AddNewRobotSuccessAction
  | AddNewRobotErrorAction
  | SetRobotActiveRequestAction
  | SetRobotActiveSuccessAction
  | SetRobotActiveErrorAction
  | SetRobotActivityRequestAction
  | SetRobotActivitySuccessAction
  | SetRobotActivityErrorAction
  | CleanRobotAction
export type RobotActionType =
  | AddNewRobotRequestType
  | AddNewRobotSuccessType
  | AddNewRobotErrorType
  | SetRobotActiveRequestType
  | SetRobotActiveSuccessType
  | SetRobotActiveErrorType
  | SetRobotActivityRequestType
  | SetRobotActivitySuccessType
  | SetRobotActivityErrorType
  | CleanRobotType
export type RobotActionPayload =
  | AddNewRobotRequestPayload
  | AddNewRobotSuccessPayload
  | AddNewRobotErrorPayload
  | SetRobotActiveRequestPayload
  | SetRobotActiveSuccessPayload
  | SetRobotActiveErrorPayload
  | SetRobotActivityRequestPayload
  | SetRobotActivitySuccessPayload
  | SetRobotActivityErrorPayload
  | undefined


// ADD NEW ROBOT
export type AddNewRobotRequestType = typeof ADD_NEW_ROBOT_REQUEST
export type AddNewRobotRequestPayload = undefined
export type AddNewRobotRequestAction = {
  type: AddNewRobotRequestType
  payload: AddNewRobotRequestPayload
}

export type AddNewRobotSuccessType = typeof ADD_NEW_ROBOT_SUCCESS
export type AddNewRobotSuccessPayload = RobotType
export type AddNewRobotSuccessAction = {
  type: AddNewRobotSuccessType
  payload: AddNewRobotSuccessPayload
}

export type AddNewRobotErrorType = typeof ADD_NEW_ROBOT_ERROR
export type AddNewRobotErrorPayload = Error
export type AddNewRobotErrorAction = {
  type: AddNewRobotErrorType
  payload: AddNewRobotErrorPayload
}

// SET ROBOT ACTIVE
export type SetRobotActiveRequestType = typeof SET_ROBOT_ACTIVE_REQUEST
export type SetRobotActiveRequestPayload = { robot: RobotType; isActive: boolean }
export type SetRobotActiveRequestAction = {
  type: SetRobotActiveRequestType
  payload: SetRobotActiveRequestPayload
}

export type SetRobotActiveSuccessType = typeof SET_ROBOT_ACTIVE_SUCCESS
export type SetRobotActiveSuccessPayload = RobotType
export type SetRobotActiveSuccessAction = {
  type: SetRobotActiveSuccessType
  payload: SetRobotActiveSuccessPayload
}

export type SetRobotActiveErrorType = typeof SET_ROBOT_ACTIVE_ERROR
export type SetRobotActiveErrorPayload = Error
export type SetRobotActiveErrorAction = {
  type: SetRobotActiveErrorType
  payload: SetRobotActiveErrorPayload
}

// SET ROBOT ACTIVITY
export type SetRobotActivityRequestType = typeof SET_ROBOT_ACTIVITY_REQUEST
export type SetRobotActivityRequestPayload = { robot: RobotType; activity: ActivityType | null }
export type SetRobotActivityRequestAction = {
  type: SetRobotActivityRequestType
  payload: SetRobotActivityRequestPayload
}

export type SetRobotActivitySuccessType = typeof SET_ROBOT_ACTIVITY_SUCCESS
export type SetRobotActivitySuccessPayload = RobotType
export type SetRobotActivitySuccessAction = {
  type: SetRobotActivitySuccessType
  payload: SetRobotActivitySuccessPayload
}

export type SetRobotActivityErrorType = typeof SET_ROBOT_ACTIVITY_ERROR
export type SetRobotActivityErrorPayload = Error
export type SetRobotActivityErrorAction = {
  type: SetRobotActivityErrorType
  payload: SetRobotActivityErrorPayload
}

export type CleanRobotType = typeof CLEAN_ROBOT
export type CleanRobotAction = {
  type: CleanRobotType
}

export type RobotErrorAction =
  | AddNewRobotErrorAction
  | SetRobotActiveErrorAction
  | SetRobotActivityErrorAction
