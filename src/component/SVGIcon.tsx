import React from 'react'

import SVG from 'react-inlinesvg'

import styled from 'styled-components'

type SVGIconProps = {
  src: string
  className?: string
}

const SVGIcon = styled(SVG)`
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