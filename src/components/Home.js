import React, { useState, useRef } from 'react';
import styled from 'styled-components'
import Profile from './Profile';
import SearchInput from './SearchInput';

const Wrapper = styled.div `
    width: 100%;
    height: calc(100vh - 60px);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 70px;
    h1 {
        display: flex;
        justify-content: center;
        @media (max-width: 1140px) {
            width: 90%;
            font-size: 25px;
        }
    }
`

const Home = () => {
    const [ profileInfo, setProfileInfo ] = useState()
    const inputRef = useRef()

    const handleSubmit = (e) => {
        e.preventDefault();
        const url = `https://api.github.com/users/${inputRef.current.value}`
        fetch(url, {})
        .then(response => response.json())
        .then(data => setProfileInfo(data))
        inputRef.current.value = ''
    }

    return (
            <Wrapper>
                <h1>Search github profile by login</h1>
                <SearchInput handleSubmit={handleSubmit} ref={inputRef} />
                    { profileInfo ? <Profile profile={profileInfo} /> : null }
            </Wrapper>
    )
}

export default Home;