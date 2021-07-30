import { RobotActionPayload, RobotActionType } from './robot.types'


export const robotAction = (
  type: RobotActionType,
  payload: RobotActionPayload,
): { type: RobotActionType; payload: RobotActionPayload } => {
  return {
    type,
    payload,
  }
}
