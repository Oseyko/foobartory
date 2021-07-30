import { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { StyledButton, Wrapper } from '../../components/globals'
import { robotsListStateSelector } from './robot.selectors'
import { ActivityType, RobotType } from './robot.types'
import { robotAction } from './robot.actions'
import {
  ASSEMBLE_FOOBAR,
  ASSEMBLE_FOOBAR_NAME,
  CHANGE_ACTIVITY_DURATION,
  MINE_BAR,
  MINE_BAR_NAME,
  MINE_FOO,
  MINE_FOO_NAME,
  SET_ROBOT_ACTIVE_REQUEST,
  SET_ROBOT_ACTIVITY_REQUEST,
} from './robot.constants'
import { randomMineBarDuration } from './robot.utils'
import { ActivityDescription, ActivityStatus, RobotWrapper } from './robot.styled'

const getActivityName = (robot: RobotType): string => {
  switch (robot.activity?.name) {
    case MINE_FOO_NAME:
      return 'MINING FOO'
    case MINE_BAR_NAME:
      return 'MINING BAR'
    case ASSEMBLE_FOOBAR_NAME:
      return 'ASSEMBLING FOOBAR'
    default:
      return 'INACTIVE'
  }
}
const Robots: FC = (): JSX.Element => {
  const dispatch = useDispatch()
  const robots = useSelector(robotsListStateSelector)


  /**
   * Set robot to inactive before dispatching the new activity after a given timeout
   * @param robot Robot to update
   * @param activity New activity to pass to the robot
   * @return Promise that resolve a robot
   */
  const moveActivity = (robot: RobotType, activity: ActivityType): Promise<RobotType> => {
    dispatch(robotAction(SET_ROBOT_ACTIVE_REQUEST, { robot, isActive: false }))
    return new Promise(resolve => {
      setTimeout(() => {
        dispatch(robotAction(SET_ROBOT_ACTIVITY_REQUEST, { robot, activity }))
        resolve(robot)
      }, CHANGE_ACTIVITY_DURATION)
    })
  }

  return (
    <Wrapper
      direction="column"
      flex="1"
      padding="2rem"
      width="100%"
      justifyContent="start"
      alignItems="start"
      gap="0.5rem"
    >
      {robots?.map(robot => {
        return (
          <RobotWrapper
            flex="0"
            padding="1rem"
            key={robot.id}
            direction="row"
            overfolw-y="auto"
            width="100%"
            alignItems="center"
            active={robot.isActive}
          >
            <Wrapper justifyContent="flex-end" width="100%" padding="0.5rem 0">
              <ActivityStatus active={robot.isActive} />
              <Wrapper>
                <ActivityDescription>
                  {getActivityName(robot)}
                </ActivityDescription>
              </Wrapper>
            </Wrapper>
            <Wrapper flex="1" gap="0.2rem" justifyContent="flex-end">
              <StyledButton
                variant={MINE_FOO_NAME}
                disabled={robot.activity?.name === MINE_FOO_NAME}
                type="button"
                onClick={() => moveActivity(robot, MINE_FOO)}
              >
                MINE FOO
              </StyledButton>
              <StyledButton
                type="button"
                variant={MINE_BAR_NAME}
                disabled={robot.activity?.name === MINE_BAR_NAME}
                onClick={() =>
                  moveActivity(robot, { ...MINE_BAR, duration: randomMineBarDuration() })
                }
              >
                MINE BAR
              </StyledButton>
              <StyledButton
                variant={ASSEMBLE_FOOBAR_NAME}
                disabled={robot.activity?.name === ASSEMBLE_FOOBAR_NAME}
                type="button"
                onClick={() => moveActivity(robot, ASSEMBLE_FOOBAR)}
              >
                ASSEMBLE FOOBAR
              </StyledButton>
            </Wrapper>
          </RobotWrapper>
        )
      })}
    </Wrapper>
  )
}

export default Robots
