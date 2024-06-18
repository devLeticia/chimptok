import { Button } from '../../../components/Button'
import {
  SuperHeader,
  Subtitle,
  SectionWrapper,
  FeatureContainer,
  DiscriptionWrapper,
} from './styles'

import { ArrowLeft } from 'phosphor-react'

import TimerImg from '../../../../public/Timer.png'

export function StepTwo() {
  return (
    <>
      <SuperHeader>HOW IT WORKS</SuperHeader>
      <Subtitle>Now that you have a goal, be consistent</Subtitle>
      <SectionWrapper>
        <FeatureContainer>
          <DiscriptionWrapper>
            <h1>#1</h1>
            <h1>GOALS & TASK</h1>
          </DiscriptionWrapper>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          <img src={TimerImg} alt="fefwe" height={400} />
        </FeatureContainer>
        <Button>Got it!</Button>
        <Button color="dark">
          <ArrowLeft size={16} weight="bold" color="white" />
          Go Back
        </Button>
      </SectionWrapper>
    </>
  )
}
