import React from 'react'

import { SVGIcon } from './SVGIcon.styles'

type SVGIconProps = {
  src: string
  className?: string
}

export default React.memo(({
  src,
  className
}: SVGIconProps) => (
  <SVGIcon src={src} className={className} />
))