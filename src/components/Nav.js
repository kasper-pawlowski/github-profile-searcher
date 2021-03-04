import React from 'react';
import styled from 'styled-components'

const Wrapper = styled.nav `
    width: 100%;
    height: 60px;
    background-color: #000;
    color: #e4e7e7;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 30px;
`

const Nav = () => {
    return (
        <Wrapper>
            <h3>Github profile searcher</h3>
        </Wrapper>
    )
}

export default Nav;