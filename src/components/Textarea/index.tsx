import { StyledTextArea } from './styles'

export function TextArea({ value, onChange, name }: { value: string, onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void, name: string }) {
  return <StyledTextArea value={value} onChange={onChange} name={name} />
}