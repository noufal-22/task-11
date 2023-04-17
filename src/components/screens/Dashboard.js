import React from 'react'
import Header from '../Includes/Header'
import styled from 'styled-components'
import Overview from './Overview'
import { Outlet } from 'react-router-dom'

export default function Dashboard() {
  return (
     <Container>
    
      <Header/>
      <Outlet/>
     </Container>
  )
}
const Container=styled.div`
  width: 70%;
  `
