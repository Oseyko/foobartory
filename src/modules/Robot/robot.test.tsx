import { put, takeLatest } from 'redux-saga/effects'

import { ADD_NEW_ROBOT_REQUEST } from './robot.constants'
import { addNewRobotWatcher, addNewRobotWorker } from './robot.sagas'
import { gameAction } from '../Game/game.actions'
import { ROBOT_BOUGHT_REQUEST } from '../Game/game.constants'

describe('ADD_NEW_ROBOT_REQUEST watchers and workers', () => {
  test('should wait for latest ADD_NEW_ROBOT_REQUEST action and call addNewRobotWorker', () => {
    const gen = addNewRobotWatcher()
    expect(gen.next().value).toEqual(takeLatest(ADD_NEW_ROBOT_REQUEST, addNewRobotWorker))
  })

  describe('ADD_NEW_ROBOT_SUCCESS handled by addNewRobotWorker', () => {
    test('should call worker and dispatch success action with a correct RobotType payload', async () => {
      const gen = addNewRobotWorker()

      const payloadReturned = gen.next().value.payload.action.payload
      expect(payloadReturned).toHaveProperty('id')
      expect(payloadReturned).toHaveProperty('activity')
      expect(payloadReturned).toHaveProperty('isActive')
      expect(gen.next().value).toEqual(put(gameAction(ROBOT_BOUGHT_REQUEST, undefined)))
    })
  })
})
