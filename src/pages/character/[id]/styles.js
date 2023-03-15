import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #686230;
  display: flex;
  justify-content: center;
`

export const Main = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  max-width: 1000px;
  padding: 1rem;
`

export const Title = styled.h1`
  color: #fff;
  padding: 1rem;
`

export const Profile = styled.div`
  background-color: #d0b997;
  padding: 1rem;
  border-radius: 0.7rem;
  width: 100%;
  li {
    list-style: none;
  }

  img {
    width: 5rem;
    height: 5rem;
  }
`

export const ProfileImage = styled.div`
  display: flex;
  justify-content: center;
  img {
    border-radius: 50%;
  }
`

export const ProfileDetails = styled.div`
  padding: 1rem;
  gap: 1rem;
  max-height: 12rem;
  height: 100%;

  ul {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 0.5rem;
  }
  h2 {
    font-size: 2.5rem;
    display: flex;
    justify-content: center;
    padding: 0.5rem;
  }

  strong {
    background-color: #f0e14a;
    padding: 0.5rem;
  }

  span {
    background-color: #97ce4c;
    padding: 0.5rem;
  }
`
