import React from 'react'

import styled from 'styled-components'

import {ReactSVG} from 'react-svg'

type SVGIconProps = {
  src: string
  className?: string
}

const SVGIcon = styled(ReactSVG)`
width: 16px;
height: 16px;
display: block;
`;

export default ({
  src,
  className
}: SVGIconProps) => {
  return (
    <SVGIcon src={src} className={className}/>
  );
}