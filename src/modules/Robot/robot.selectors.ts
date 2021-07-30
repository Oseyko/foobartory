import { createSelector } from 'reselect'

import { RootState } from '../../redux/types'

const robotState = (state: RootState) => state.robot
const robotLoadingState = (state: RootState) => state.robot.loading
const robotsListState = (state: RootState) => state.robot.robots

export const robotLoadingStateSelector = createSelector(
  robotLoadingState,
  loading => loading
)

export const robotStateSelector = createSelector(robotState, robot => robot)
export const robotsListStateSelector = createSelector(robotsListState, alerte => alerte)
