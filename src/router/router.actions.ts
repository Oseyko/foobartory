import { NavigateToRequestPayload, NavigateToRequestType } from './router.types'

export const routerAction = (
  type: NavigateToRequestType,
  payload: NavigateToRequestPayload
): {
  type: NavigateToRequestType
  payload: NavigateToRequestPayload
} => {
  return {
    type,
    payload,
  }
}
