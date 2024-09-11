import { IdentificationBadge, At } from '@phosphor-icons/react'
import { Input } from '../../../../components/Input'
import { Card, CardTitle, InputsWrapper, SaveButton } from './styles'
import { ProfileInfo } from '../profileInfo'

export function AccountInfo() {
  return (
    <Card>
      <CardTitle>Account info</CardTitle>
      <ProfileInfo/>
      {/* <InputsWrapper>
        <Input
          type="text"
          placeholder={'Your name or Nickname'}
          value={'Letty'}
          icon={<IdentificationBadge weight="duotone" size={24} />}
        ></Input>
        <Input
          type="text"
          disabled
          placeholder={''}
          value={'leticiagoncalves@gmail.lcom'}
          icon={<At weight="duotone" size={24} />}
        ></Input>
      </InputsWrapper> */}
      {/* <SaveButton disabled>Save</SaveButton> */}
    </Card>
  )
}
