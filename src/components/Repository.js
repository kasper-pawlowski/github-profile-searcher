import React from 'react';
import styled, { keyframes } from 'styled-components'
import { BsStar, BsArrowRight } from 'react-icons/bs'

const animation = keyframes `
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`

const Wrapper = styled.div `
    height: 100px;
    padding: 10px;
    /* border-radius: 7px; */
    border: 1.5px solid black;
    display: flex;
    flex-direction: column;
    animation: ${animation} .4s forwards;
    @media (max-width: 1140px) {
        width: 100%;
    }
`

const Name = styled.p `
    text-overflow: ellipsis;
    overflow: hidden; 
    width: 100%;
    white-space: nowrap;
    font-size: 18px;
    font-weight: 500;
`

const Bio = styled.p `
    text-overflow: ellipsis;
    overflow: hidden; 
    width: 350px;
    white-space: nowrap;
    font-size: 13px;
    color: #737373;
    margin-top: 3px;
`

const Flex = styled.div `
    display: flex;
    align-items: center;
    width: 100%;
    margin-top: auto;
    a {
        margin-left: auto;
        text-decoration: none;
    }
`

const Language = styled.p `
    font-size: 13px;
    margin-right: 10px;
`

const Stars = styled.p `
    display: flex;
    p {
        font-size: 13px;
        margin-left: 5px;
    }
`

const GoToRepoBtn = styled.button `
    cursor: pointer;
    outline: none;
    border: none;
    background: none;
    font-weight: 500;
    font-size: 14px;
    padding: 0 7px;
    display: flex;
    align-items: center;
    p {
        margin-right: 5px;
    }
    &:hover {
        border-left: 1.5px solid #000;
    }
`

const Repository = (({ item }) => {
    return (
        <Wrapper >
            <Name>{item.name}</Name>
            <Bio>{item.description}</Bio>
            <Flex >
                { item.language ? <Language>{item.language}</Language> : null }  
                { item.stargazers_count !== 0 ? <Stars><BsStar /><p>{item.stargazers_count}</p></Stars> : null}
                <a href={item.html_url} target="_blank" rel="noreferrer" ><GoToRepoBtn><p>Go to repo</p><BsArrowRight /></GoToRepoBtn></a>
            </Flex>
        </Wrapper>
    )

})

export default Repository;