import { createSelector } from 'reselect'

import { RootState } from '../../redux/types'

const fullGameState = (state: RootState) => state.example
const gameStateLoadingState = (state: RootState) => state.example.loading
const gameState = (state: RootState) => state.example.gameState

export const gameStateLoadingStateSelector = createSelector(
  gameStateLoadingState,
  loading => loading
)

export const fullGameStateSelector = createSelector(fullGameState, example => example)
export const gameStateSelector = createSelector(gameState, game => game)
