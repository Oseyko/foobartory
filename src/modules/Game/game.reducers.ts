import {
  ASSEMBLE_FOOBAR_ERROR,
  ASSEMBLE_FOOBAR_SUCCESS,
  CLEAN_GAME, MINE_BAR_ERROR,
  MINE_BAR_SUCCESS,
  MINE_FOO_SUCCESS, ROBOT_BOUGHT_ERROR,
  ROBOT_BOUGHT_SUCCESS,
} from './game.constants'
import {
  AssembleFoobarSuccessAction,
  ExampleAction, GameErrorAction,
  GameState,
  RobotBoughtSuccessAction,
} from './game.types'
import { MINE_FOO_ERROR } from '../Robot/robot.constants'

/**
 * Initial GameState
 */
export const initGameState: GameState = {
  loading: false,
  gameState: {
    foo: 0,
    bar: 0,
    foobar: 0,
  },
}

/**
 * Return new state with one more foo
 * @param state
 */
function addFoo(state: GameState): GameState {
  return {
    ...state,
    gameState: {
      ...state.gameState,
      foo: state.gameState.foo + 1,
    },
  }
}

/**
 * Return new state with one more bar
 * @param state
 */
function addBar(state: GameState): GameState {
  return {
    ...state,
    gameState: {
      ...state.gameState,
      bar: state.gameState.bar + 1,
    },
  }
}

/**
 * Return new state with updated quantity from action payload
 * @param state
 * @param action
 */
function updateQuantity(
  state: GameState,
  action: AssembleFoobarSuccessAction | RobotBoughtSuccessAction
): GameState {
  const { payload } = action
  return {
    ...state,
    gameState: {
      foo: state.gameState.foo + payload.foo,
      bar: state.gameState.bar + payload.bar,
      foobar: state.gameState.foobar + payload.foobar,
    },
  }
}

/**
 * initialize or add error to the game redux state error array
 * @param state
 * @param action
 */
function setError(state: GameState, action: GameErrorAction): GameState {
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
 * Clean GameStatev to it initial values
 */
function clean(): GameState {
  return initGameState
}

/**
 * Example reducer constructor
 * @param state
 * @param action
 * @constructor
 */

export const exampleReducer = (
  state: GameState = initGameState,
  action: ExampleAction
): GameState => {
  switch (action.type) {
    case MINE_FOO_SUCCESS:
      return addFoo(state)
    case MINE_FOO_ERROR:
      return setError(state, action)
    case MINE_BAR_SUCCESS:
      return addBar(state)
    case MINE_BAR_ERROR:
      return setError(state, action)
    case ASSEMBLE_FOOBAR_SUCCESS:
      return updateQuantity(state, action)
    case ASSEMBLE_FOOBAR_ERROR:
      return setError(state, action)
    case ROBOT_BOUGHT_SUCCESS:
      return updateQuantity(state, action)
    case ROBOT_BOUGHT_ERROR:
      return setError(state, action)
    case CLEAN_GAME:
      return clean()
    default:
      return {
        ...state,
      }
  }
}
