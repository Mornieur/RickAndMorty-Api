import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  width: 100%;
  height: 100vh;
  height: 100%;
  display: grid;
  place-items: center;
`

export const Profile = styled.div`
  background-color: red;
  max-width: 700px;
  width: 100%;
  max-height: 700px;
  height: 100%;
  display: grid;

  place-items: center;
  align-items: center;
  text-align: center;
`

export const ProfileImage = styled.div``

export const ProfileDetails = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;

  li {
    list-style: none;
    strong {
      width: 250px;
      height: 100px;
      background-color: blue;
    }
  }
`
