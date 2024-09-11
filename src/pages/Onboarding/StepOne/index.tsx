import { Button } from '../../../components/Button'
import { Input } from '../../../components/Input'
import { DividerWithText } from '../../Auth/Login/styles'
import {
  SuperHeader,
  Subtitle,
  SessionLabel,
  SectionWrapper,
  DetailsWrapper,
  Skip,
} from './styles'

import {
  FlagBanner,
  Calendar,
  Clock,
  CheckSquareOffset,
  Plus,
} from '@phosphor-icons/react'

export function NewGoalForm() {
  return (
    <>
      <SuperHeader>SET THE GOAL</SuperHeader>
      <Subtitle>First, set a goal you want to achieve</Subtitle>
      <SectionWrapper>
        <SessionLabel>
          Set the goal and its details
          <span>(you’ll be able to set more goals later)</span>
        </SessionLabel>
        <Input
          type="text"
          placeholder="Goal to Achieve"
          icon={<FlagBanner weight="duotone" size={24} />}
        />
        <SessionLabel>Set a date dealine and</SessionLabel>
        <DetailsWrapper>
          <Input
            type="date"
            placeholder="Deadline"
            icon={<Calendar weight="duotone" size={24} />}
          />
          <Input
            type="number"
            onKeyDown={(evt) =>
              ['e', 'E', '+', '-'].includes(evt.key) && evt.preventDefault()
            }
            min={1}
            max={40}
            placeholder="Hours per week"
            icon={<Clock weight="duotone" size={24} />}
          />
        </DetailsWrapper>
      </SectionWrapper>
      <SectionWrapper>
        <SessionLabel>
          Now, add tasks that’ll make you achieve the goal.
        </SessionLabel>
        <Input
          placeholder="Task"
          icon={<CheckSquareOffset weight="duotone" size={24} />}
        />
        <Button color="dark">
          <Plus size={16} weight="bold" color="white" />
          Add another Task
        </Button>
        <Button>Save and Proceed</Button>
        <Skip>Skip Onboarding</Skip>
      </SectionWrapper>
    </>
  )
}
