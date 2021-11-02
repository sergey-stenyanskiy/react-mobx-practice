export type ButtonPrimaryColors = {
  [index: string]: string

  red: '#EB5757'
  green: '#27AE60'
  blue: '#3C4FF4'
  white: 'white'
  transparent: 'transparent'
}

export type ButtonTextColors = {
  [index: string]: string

  white: 'white'
  black: 'black'
}

export type ButtonTheme = {
  background: keyof ButtonPrimaryColors
  text: keyof ButtonTextColors
}

export type ButtonStyleVariants = 'primary' | 'danger'

export type ButtonStyles = {
  [index in ButtonStyleVariants]: ButtonTheme
}

export type AppTheme = {
  button: ButtonStyles
}

export type HTMLButtonType = 'button' | 'submit' | 'reset'