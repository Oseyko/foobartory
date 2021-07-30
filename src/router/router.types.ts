import { NAVIGATE_TO_REQUEST } from './router.constants'

export type NavigateToRequestType = typeof NAVIGATE_TO_REQUEST
export type NavigateToRequestPayload = {
  path: string
}
export type NavigateToRequestAction = {
  type: NavigateToRequestType
  payload: NavigateToRequestPayload
}
