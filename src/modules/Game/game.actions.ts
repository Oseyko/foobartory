import { ExampleActionPayload, ExampleActionType } from './game.types'


export const gameAction = (
  type: ExampleActionType,
  payload: ExampleActionPayload,
): { type: ExampleActionType; payload: ExampleActionPayload } => {
  return {
    type,
    payload,
  }
}
