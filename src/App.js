import React from 'react'
import Home from './components/Home'
import Nav from './components/Nav'
import GlobalStyle from './globalStyles'
import styled from 'styled-components'

const Wrapper = styled.div `
  width: 100%;
  height: 100%;
`

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Nav />
        <Home />
      </Wrapper>
    </>
  )
}

export default App;
