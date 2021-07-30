import { put, takeLatest, takeEvery, select } from 'redux-saga/effects'
import { v4 as uuid } from 'uuid'

import {
  addBarWatcher,
  addBarWorker,
  addFooWatcher,
  addFooWorker,
  assembleFoobarWatcher,
  assembleFoobarWorker,
  robotBoughtWatcher,
  robotBoughtWorker,
} from './game.sagas'
import { MINE_FOO_REQUEST } from '../Robot/robot.constants'
import { gameAction } from './game.actions'
import {
  ASSEMBLE_FOOBAR_REQUEST,
  ASSEMBLE_FOOBAR_SUCCESS,
  MINE_BAR_REQUEST,
  MINE_BAR_SUCCESS,
  MINE_FOO_SUCCESS,
  ROBOT_BOUGHT_REQUEST,
  ROBOT_BOUGHT_SUCCESS,
} from './game.constants'
import { gameStateSelector } from './game.selectors'
import { initGameState } from './game.reducers'

describe('MINE_FOO_REQUEST watchers and workers', () => {
  test('should wait for every MINE_FOO_REQUEST action and call addFooWorker', () => {
    const gen = addFooWatcher()
    expect(gen.next().value).toEqual(takeEvery(MINE_FOO_REQUEST, addFooWorker))
  })

  describe('MINE_FOO_SUCCESS handled by addFooWorker', () => {
    const payload = {
      id: uuid(),
      isActive: false,
      activity: null,
    }
    test('should call worker and dispatch success action', async () => {
      const gen = addFooWorker({ type: MINE_FOO_REQUEST, payload: { robot: payload } })
      expect(gen.next().value).toEqual(put(gameAction(MINE_FOO_SUCCESS, undefined)))
    })
  })
})

describe('MINE_BAR_REQUEST watchers and workers', () => {
  test('should wait for every MINE_BAR_REQUEST action and call addBarWorker', () => {
    const gen = addBarWatcher()
    expect(gen.next().value).toEqual(takeEvery(MINE_BAR_REQUEST, addBarWorker))
  })

  describe('MINE_BAR_SUCCESS handled by addBarWorker', () => {
    const payload = {
      id: uuid(),
      isActive: false,
      activity: null,
    }
    test('should call worker and dispatch success action', async () => {
      const gen = addBarWorker({ type: MINE_BAR_REQUEST, payload: { robot: payload } })
      expect(gen.next().value).toEqual(put(gameAction(MINE_BAR_SUCCESS, undefined)))
    })
  })
})

describe('ASSEMBLE_FOOBAR_REQUEST watchers and workers', () => {
  test('should wait for every ASSEMBLE_FOOBAR_REQUEST action and call assembleFoobarWorker', () => {
    const gen = assembleFoobarWatcher()
    expect(gen.next().value).toEqual(takeEvery(ASSEMBLE_FOOBAR_REQUEST, assembleFoobarWorker))
  })

  describe('ASSEMBLE_FOOBAR_SUCCESS handled by assembleFoobarWorker', () => {
    const payload = {
      id: uuid(),
      isActive: false,
      activity: null,
    }

    const expectedResult = {
      foo: 0,
      bar: 0,
      foobar: 0,
    }

    test('should call worker and dispatch success action with expected result for initial state', async () => {
      const gen = assembleFoobarWorker({
        type: ASSEMBLE_FOOBAR_REQUEST,
        payload: { robot: payload },
      })
      expect(gen.next().value).toEqual(select(gameStateSelector))
      expect(gen.next(initGameState.gameState).value).toEqual(put(gameAction(ASSEMBLE_FOOBAR_SUCCESS, expectedResult)))
    })
  })
})

describe('ROBOT_BOUGHT_REQUEST watchers and workers', () => {
  test('should wait for latest ROBOT_BOUGHT_REQUEST action and call robotBoughtWorker', () => {
    const gen = robotBoughtWatcher()
    expect(gen.next().value).toEqual(takeLatest(ROBOT_BOUGHT_REQUEST, robotBoughtWorker))
  })

  describe('ROBOT_BOUGHT_SUCCESS handled by robotBoughtWorker', () => {
    const expectedResult = {
      foo: -6,
      bar: 0,
      foobar: -3,
    }

    test('should call worker and dispatch success action', async () => {
      const gen = robotBoughtWorker()
      expect(gen.next().value).toEqual(put(gameAction(ROBOT_BOUGHT_SUCCESS, expectedResult)))
    })
  })
})
