import { useState } from 'react'
import Equipments from '../../components/Equipments'
import TabContainer from '../../components/TabContainer'
import Stats from '../../components/Stats'

import * as S from './styles'

export default function Home() {
  return (
    <>
      <S.Wrapper>
        <Equipments />
        <TabContainer tabOption="attributes" />
        <Stats />
      </S.Wrapper>
    </>
  )
}
