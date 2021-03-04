import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import Repository from './Repository';
import { BsViewList } from 'react-icons/bs'
import { FiGrid, FiUsers } from 'react-icons/fi'
import { BsArrowRight } from 'react-icons/bs'

const Wrapper = styled.div `
    width: 900px;
    /* border-radius: 10px; */
    margin-top: 50px;
    margin-bottom: 50px;
    padding: 30px;
    background: white;
    @media (max-width: 1140px) {
        width: 100%;
        padding: 0;
        /* border-radius: 25px; */
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`

const ProfileInfo = styled.div `
    display: flex;
    @media (max-width: 1140px) {
        flex-direction: column;
        align-items: center;
        width: 90%;
    }
`


const Avatar = styled.img `
    width: 170px;
    height: 170px;
    border-radius: 100%;
    border: 2px solid black;
    border-collapse: 10px;
    margin-right: 30px;
    @media (max-width: 1140px) {
        margin: 20px 0;
    }
`

const Div = styled.div `
    display: flex;
    flex-direction: column;
    height: 170px;
    overflow: hidden;
    a {
        text-decoration: none;
    }
    @media (max-width: 1140px) {
        width: 100%;
    }
`

const Name = styled.p `
    font-size: 32px;
    font-weight: 600;
`

const Login = styled.p `
    font-size: 16px;
    color: #7C7C7C;
    margin: 5px 0 15px 0;
`

const Bio = styled.p `
    width: 350px;
    overflow: hidden;
    position: relative;
    line-height: 1.2em;
    height: 3.6em;
    &::after {
        content: ""; 
        text-align: right;
        position: absolute;
        bottom: 0;
        right: 0;
        width: 70%;
        height: 1.2em;
        background: linear-gradient(to right, transparent 10%, #fff 90%);
    }
`

const Flex = styled.div `
    display: flex;
    margin-top: auto;
    font-size: 14px;
`

const Followers = styled.p `
    display: flex;
    align-items: center;
    p {
        margin-left: 5px;
    }
`

const Dot = styled.p `
    margin: 0 10px;
`

const Following = styled.p `
    display: flex;
    align-items: center;
    p {
        margin-left: 5px;
    }
`

const GoToProfile = styled.a `
    margin: auto 0 0 auto;
    text-decoration: none;
    button {
        cursor: pointer;
        background: none;
        outline: none;
        border: 1.5px solid black;
        padding: 4px 7px;
        display: flex;
        align-items: center;
        justify-content: center;
        p {
            margin-right: 5px;
        }
        &:hover {
            border-left: 1.5px solid #000;
        }
        @media (max-width: 1140px) {
            width: 100%;
            padding: 10px;
        }
    }
    @media (max-width: 1140px) {
        margin: 20px auto;
        width: 100%;
    }
`

const RepositoriesTextAndToggle = styled.div `
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 20px;
    p {
        font-weight: 500;
        font-size: 20px;
        span {
            color: #7C7C7C;
            margin-left: 7px;
        }
    }
    span {
        font-size: 18px;
        cursor: pointer;
        @media (max-width: 1140px) {
            display: none;
        }
    }
    @media (max-width: 1140px) {
        width: 90%;
        margin: 0 5%;
    }
`

const NotFound = styled.p `
    margin-top: 50px;
    font-size: 18px;
`

const Profile = (({ profile }) => {
    const [ repos, setRepos ] = useState()
    const [ gridView, setGridView ] = useState(true)

    useEffect(() => {
        const url = `https://api.github.com/users/${profile.login}/repos`
        fetch(url, {})
        .then(response => response.json())
        .then(data => setRepos(data))
    }, [profile])

    const Repositories = styled.div `
        margin: 30px 0;
        width: 100%;
        display: grid;
        grid-template-columns: ${ gridView ? 'repeat(2, 1fr)' : 'repeat(1, 1fr)' };
        grid-template-rows: ${ gridView ? 'repeat(2, 1fr)' : 'repeat(1, 1fr)' };
        grid-column-gap: 15px;
        grid-row-gap: 15px;
        @media (max-width: 1140px) {
            width: 90%;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
    `

    function changeListView() {
        setGridView(!gridView)
    }

    if (profile.login) {
        return (
            <Wrapper >
                <ProfileInfo>
                    <Avatar src={profile.avatar_url} alt="avatar"/>
                    <Div >
                        <Name>{profile.name}</Name>
                        <a href={`https://github.com/${profile.login}`} target="_blank" rel="noreferrer" >
                            <Login>{`@${profile.login}`}</Login>
                        </a>
                        <Bio>{profile.bio}</Bio>
                        <Flex>
                            { profile.followers ? <Followers><FiUsers /><p>{`${profile.followers} followers`}</p></Followers> : null } 
                            { profile.followers && profile.following ? <Dot>•</Dot> : null }
                            { profile.following ? <Following><p>{`${profile.following} following`}</p></Following> : null } 
                        </Flex>
                    </Div>
                    <GoToProfile href={`https://github.com/${profile.login}`} target="_blank" rel="noreferrer" ><button><p>Go to profile</p><BsArrowRight /></button></GoToProfile>
                </ProfileInfo>
                <RepositoriesTextAndToggle>
                    <p>Repositories: <span>{profile.public_repos}</span></p>
                    <span>
                        { gridView ? <BsViewList title="change to list view" onClick={changeListView} /> : <FiGrid title="change to grid view" onClick={changeListView} /> }
                    </span>
                </RepositoriesTextAndToggle>
                <Repositories >
                    { repos ? repos.map(e => <Repository item={e} /> ) :null }
                </Repositories>
            </Wrapper>
        )
    } else {
        return <NotFound>{profile.message}</NotFound>
    }
})

export default Profile;