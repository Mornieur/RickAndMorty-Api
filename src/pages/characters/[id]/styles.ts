import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  background-color: black;
  background-image: url('/fundoEstrelado.jpg');
`

export const Profile = styled.div`
  max-width: 700px;
  width: 100%;
  max-height: 700px;
  height: 100%;
  display: grid;

  place-items: center;

  align-items: center;
  text-align: center;

  position: relative;
  top: -5rem;
`

export const ProfileImage = styled.div`
  display: grid;
  place-items: top normal;

  section {
    width: 400px;
    height: 400px;

    background-image: url('/portalTwo.png');
    background-repeat: no-repeat;
    background-position: center;
    display: grid;
    place-items: center;
  }
  img {
    width: 200px;
    height: 200px;
    display: flex;
    justify-content: center;
    margin: 0 auto;
    border-radius: 50%;
    border: 3px solid white;
  }
`

export const ProfileDetails = styled.div`
  h2 {
    width: 300px;
    height: 30px;
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
  }
  text-align: center;
  display: grid;
  place-items: center;
  flex: 1;
  width: 700px;
  //height: 300px;
  /* background-color: yellow; */
  color: white;
  padding: 1rem 0;
  strong {
    max-width: 150px;
    width: 100%;
    height: 30px;
    background-color: #00c84e;
    border-radius: 10px;
    text-align: center;
    padding: 5px;
  }
`

export const ProfileTitle = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  gap: 10px;
`
