import { Button } from '../../../components/Button'
import { Input } from '../../../components/Input'
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
} from 'phosphor-react'

export function StepOne() {
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
          placeholder="Goal to Achieve"
          icon={<FlagBanner weight="duotone" size={24} />}
        />
        <DetailsWrapper>
          <Input
            placeholder="Deadline"
            icon={<Calendar weight="duotone" size={24} />}
          />
          <Input
            placeholder="Weekly Hours"
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
        <Input
          placeholder="Another Task"
          icon={<CheckSquareOffset weight="duotone" size={24} />}
        />
        <Input
          placeholder="One more Task"
          icon={<CheckSquareOffset weight="duotone" size={24} />}
        />
        <Button color="dark">
          <Plus size={16} weight="bold" color="white" />
          Add another Task
        </Button>
        <Button>Save and Proceed</Button>
        <Skip>Skip</Skip>
      </SectionWrapper>
    </>
  )
}
