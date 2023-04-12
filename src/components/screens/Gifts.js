import React from 'react'
import Coming from '../images/Assets/cominsoon.avif'
import styled from 'styled-components'

export default function Gifts() {
  return (
    <ImageContainer>
    <Img src={Coming} />
 </ImageContainer>
  )
}
const ImageContainer = styled.div`
  width: 20%;

`  
const Img = styled.img`
  width:100%;
  display: block;
`  