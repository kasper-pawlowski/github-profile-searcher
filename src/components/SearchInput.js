import React from 'react';
import styled, { keyframes } from 'styled-components'

const inputAnimation = keyframes`
    from {
        width: 0%;
    }
    to {
        width: 100%;
    }
`;

const Border = styled.div `
    position: absolute;
    bottom: 0;
    height: 2px;
    background-color: black;
`

const Form = styled.form `
    height: 50px;
    width: 450px;
    position: relative;
    margin-top: 30px;
    display: flex;
    justify-content: center;
    &:focus-within ${Border} {
        animation: ${inputAnimation} .3s forwards;
    }
    @media (max-width: 1140px) {
        width: 90%;
    }
`

const Input = styled.input `
    outline: none;
    border: none;
    border-bottom: 2px solid #b7b7b7;
    padding: 0 20px;
    border-radius: 0;
    background: none;
    width: 100%;
    height: 100%;
    font-size: 16px;
    font-weight: 600;
    background: none;
`

const SearchInput = React.forwardRef((props, ref) => {

    return (
        <Form onSubmit={props.handleSubmit} >
            <Input ref={ref} type="text" placeholder="Search..." />
            <Border />
        </Form>
    )
})

export default SearchInput;