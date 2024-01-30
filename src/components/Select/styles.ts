import styled from 'styled-components'

export const CustomDropdown = styled.div`
  text-align: left;
  position: relative;
  width: 100%;
`

export const StyledSelect = styled.div`
  text-align: left;
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme['gray-100']};
  padding: 1rem;
  font-size: 0.85rem;
  width: 100%;
  border: 2px solid ${(props) => props.theme['gray-300']};
  border-radius: 8px;
  box-sizing: border-box;
  transition: border 0.3s ease;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    border: 2px solid ${(props) => props.theme['yellow-500']};
  }

  span {
    flex-grow: 1;
  }
`

export const OptionList = styled.div`
  text-align: left;
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  max-height: 150px;
  overflow-y: auto;
  background-color: ${(props) => props.theme['gray-100']};
  border: 2px solid ${(props) => props.theme['gray-300']};
  border-top: none;
  border-radius: 0 0 8px 8px;
  box-sizing: border-box;
  z-index: 1;
`

export const StyledOption = styled.div`
  padding: 0.75rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) => props.theme['yellow-300']};
  }
`

export const CaretDownIcon = styled.div`
  margin-left: 0.5rem;
  display: flex;
  align-items: center;
  color: ${(props) => props.theme['gray-700']};
`
