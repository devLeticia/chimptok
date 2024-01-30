import { InputHTMLAttributes } from 'react'
import { Wrapper } from './styles'

interface RadioProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  subLabel: string
  id: string
  name: string
}

export function Radio({ label, subLabel, id, name, ...props }: RadioProps) {
  return (
    <Wrapper>
      <input type="radio" id={id} {...props} name={name} />
      <label htmlFor={id}>
        <h1>{label}</h1>
        <p>{subLabel}</p>
      </label>
    </Wrapper>
  )
}

export default Radio
