import { FC } from 'react'

import { MainContentWrapper } from '../components/globals'
import Game from '../modules/Game/game'

export const Home: FC = () => {
  return (
    <MainContentWrapper>
      <Game />
    </MainContentWrapper>
  )
}
