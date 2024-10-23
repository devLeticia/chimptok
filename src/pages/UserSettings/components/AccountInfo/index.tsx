import { IdentificationBadge, At } from '@phosphor-icons/react'
import { Input } from '../../../../components/Input'
import { Card, CardTitle} from './styles'
import { ProfileInfo } from '../profileInfo'

export function AccountInfo() {
  return (
    <Card>
      <CardTitle>Account Info</CardTitle>
      <ProfileInfo/>
    </Card>
  )
}
