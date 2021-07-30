import { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { CancelablePromise } from 'cancelable-promise'

import { StyledButton, Wrapper } from '../../components/globals'
import { gameStateLoadingStateSelector, gameStateSelector } from './game.selectors'
import Robots from '../Robot/robots'
import { robotsListStateSelector } from '../Robot/robot.selectors'
import { RobotType } from '../Robot/robot.types'
import {
  ADD_NEW_ROBOT_REQUEST,
  ASSEMBLE_FOOBAR_DURATION,
  ASSEMBLE_FOOBAR_NAME,
  CLEAN_ROBOT,
  MINE_BAR_NAME,
  MINE_FOO_DURATION,
  MINE_FOO_NAME,
  MINE_FOO_REQUEST,
} from '../Robot/robot.constants'
import {
  ASSEMBLE_FOOBAR_REQUEST,
  CLEAN_GAME,
  MINE_BAR_REQUEST,
  NB_ROBOTS_WIN_CONDITION,
} from './game.constants'
import { gameAction } from './game.actions'
import { randomMineBarDuration } from '../Robot/robot.utils'
import { robotAction } from '../Robot/robot.actions'
import { ColoredSpan, ScoreContainer, Stat } from './game.styled'

const Game: FC = (): JSX.Element => {
  const loading = useSelector(gameStateLoadingStateSelector)
  const robots = useSelector(robotsListStateSelector)
  const gameState = useSelector(gameStateSelector)
  const dispatch = useDispatch()

  /**
   * Handle victory and reset game
   */
  const victory = () => {
    // eslint-disable-next-line no-alert
    alert('GAME WON ! CONGRATULATIONS')
    dispatch(gameAction(CLEAN_GAME, undefined))
    dispatch(robotAction(CLEAN_ROBOT, undefined))
  }

  /**
   * Handle new robot request
   */
  const addNewRobot = (): void => {
    if (gameState.foobar >= 3 && gameState.foo >= 6) {
      dispatch(robotAction(ADD_NEW_ROBOT_REQUEST, undefined))
    }
  }


  /**
   * Handle mineFoo request
   */
  const mineFoo = (robot: RobotType): Promise<RobotType> => {
    return new Promise(resolve =>
      setTimeout(() => {
        dispatch(gameAction(MINE_FOO_REQUEST, robot))
        resolve(robot)
      }, MINE_FOO_DURATION)
    )
  }

  /**
   * Handle mineBar request
   */
  const mineBar = (robot: RobotType): Promise<RobotType> => {
    const timeout = randomMineBarDuration()
    return new Promise(resolve =>
      setTimeout(() => {
        dispatch(gameAction(MINE_BAR_REQUEST, robot))
        resolve(robot)
      }, timeout)
    )
  }

  /**
   * Handle assembleFoobar request
   */
  const assembleFoobar = (robot: RobotType): Promise<RobotType> => {
    return new Promise(resolve =>
      setTimeout(() => {
        dispatch(gameAction(ASSEMBLE_FOOBAR_REQUEST, robot))
        resolve(robot)
      }, ASSEMBLE_FOOBAR_DURATION)
    )
  }

  /**
   * Handle game loop for each robot
   * @param robot
   */
  const gameExecution = (robot: RobotType): VoidFunction => {
    // Make promise cancelable to allow recursive loop stop
    const gamePromise = new CancelablePromise(async (_, __, onCancel) => {
      let stopCondition = true
      onCancel(() => {
        stopCondition = false
      })
      // Game loop for current robot
      const innerGameExecution = async () => {
        if (robot.isActive && stopCondition) {
          if (robot.activity?.name === 'mineFoo') {
            await mineFoo(robot)
            await innerGameExecution()
          }

          if (robot.activity?.name === 'mineBar') {
            await mineBar(robot)
            await innerGameExecution()
          }

          if (robot.activity?.name === 'assembleFoobar') {
            await assembleFoobar(robot)
            await innerGameExecution()
          }
        }
      }
      // Start loop
      innerGameExecution()
    })
    return gamePromise.cancel
  }

  useEffect(() => {
    if (robots.length >= NB_ROBOTS_WIN_CONDITION) {
      victory()
    }
    const gamePromises = robots?.map(robot => gameExecution(robot))
    return () => {
      gamePromises.forEach(cancelPromise => {
        cancelPromise()
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [robots])

  return (
    <>
      {loading && (
        <Wrapper
          direction="column"
          alignItems="center"
          justifyContent="center"
          height="100%"
          width="100%"
          flex="1"
        >
          <FontAwesomeIcon icon="spinner" spin size="lg" />
          <p>Chargement</p>
        </Wrapper>
      )}
      {!loading && (
        <Wrapper
          direction="column"
          alignItems="center"
          justifyContent="center"
          width="100%"
          flex="1"
        >
          <ScoreContainer>
            <Wrapper flex="1" alignItems="center" justifyContent="center">
              <Stat type={MINE_FOO_NAME}>
                FOO : <span>{gameState.foo}</span>
              </Stat>
              <Stat type={MINE_BAR_NAME}>
                BAR : <span>{gameState.bar}</span>
              </Stat>
              <Stat type={ASSEMBLE_FOOBAR_NAME}>
                FOOBAR : <span>{gameState.foobar}</span>
              </Stat>
            </Wrapper>
            <Wrapper alignItems="center" direction="column">
              <Wrapper padding="0.5rem">Get 20 robots to win !</Wrapper>
              <Wrapper padding="0.5rem">
                Buy a new robot for <ColoredSpan type={MINE_FOO_NAME}>6 FOO</ColoredSpan> and{' '}
                <ColoredSpan type={ASSEMBLE_FOOBAR_NAME}>3 FOOBAR</ColoredSpan>
              </Wrapper>
              <StyledButton
                variant="primary"
                type="button"
                onClick={() => addNewRobot()}
                disabled={!(gameState.foobar >= 3 && gameState.foo >= 6)}
              >
                BUY NEW ROBOT
              </StyledButton>
            </Wrapper>
          </ScoreContainer>

          <Robots />
        </Wrapper>
      )}
    </>
  )
}

export default Game
