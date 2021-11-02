import styled from 'styled-components'

import { ButtonStyleVariants, AppTheme } from '../../types/styles.types'

type RoundedButtonStylingProps = {
  theme: AppTheme,
  buttonStyle: ButtonStyleVariants
}

export const StyledButton = styled.button`
cursor: pointer;
font-family: "Poppins";
border: none;
outline: none;
display: flex;
flex-direction: row;
padding: 12px 20px;
border-radius: 20px;
`;

export const StyledButtonVariant = styled(StyledButton)`
background: ${({ theme, buttonStyle }: RoundedButtonStylingProps) => theme.button[buttonStyle].background};
color: ${({ theme, buttonStyle }: RoundedButtonStylingProps) => theme.button[buttonStyle].text};
`;