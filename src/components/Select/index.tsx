import { useEffect, useState } from 'react'
import {
  CustomDropdown,
  StyledSelect,
  OptionList,
  StyledOption,
  CaretDownIcon,
} from './styles'
import { CaretDown } from "@phosphor-icons/react";

interface SelectProps<T> {
  label?: string
  placeholder?: string
  options: T[]
  getLabel: (option: T) => string
  onSelect?: (selectedOption: T) => void
  initialValue?: T
}

export function Select<T>({
  options,
  getLabel,
  label,
  placeholder,
  onSelect,
  initialValue,
}: SelectProps<T>) {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState<T | undefined>(initialValue)

  useEffect(() => {
    if (initialValue) {
      setSelectedOption(initialValue)
    }
  }, [initialValue])

  const handleSelect = (option: T) => {
    setSelectedOption(option)
    setIsOpen(false)

    if (onSelect) {
      onSelect(option)
    }
  }

  return (
    <CustomDropdown>
      {label && <label>{label}</label>}
      <StyledSelect onClick={() => setIsOpen(!isOpen)}>
        <span>{selectedOption ? getLabel(selectedOption) : placeholder}</span>
        <CaretDownIcon>
          <CaretDown size={16} />
        </CaretDownIcon>
      </StyledSelect>
      {isOpen && (
        <OptionList>
          {options.map((option) => (
            <StyledOption key={getLabel(option)} onClick={() => handleSelect(option)}>
              {getLabel(option)}
            </StyledOption>
          ))}
        </OptionList>
      )}
    </CustomDropdown>
  )
}

export default Select
