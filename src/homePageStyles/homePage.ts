import styled from 'styled-components'

export const Container = styled.div`
  background-color: black;
  background-image: url('portalTwo.png');

  h1 {
    color: white;
    width: 400px;
    height: 50px;
    background-color: #44281d;
    white-space: nowrap;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: 600px) {
    .grid {
      width: 100%;
      flex-direction: column;
    }
  }

  head {
    @media (max-width: 600px) {
      .grid {
        width: 100%;
        flex-direction: column;
      }
    }
  }
`

export const MainContainer = styled.div`
  min-height: 100vh;

  a {
    text-decoration: none;
    color: white;
  }

  /* flex: 1; */
  display: grid;
  place-items: center;
  align-items: center;

  input {
    margin-right: 0;
    margin-bottom: 0.5em;
    width: 100%;

    button {
      width: 100%;
    }
  }
  .seeMore {
    display: flex;
    justify-content: center;
    background-color: white;
    border: 3px solid green;
    border-radius: 10px;
    width: 100px;
    height: 50px;
    text-align: center;
    align-items: center;
    margin: 0 auto;
  }

  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    max-width: 800px;

    list-style: none;
    margin-left: 0;
    padding-left: 0;

    .card {
      margin: 1rem;
      padding: 1rem;
      border-radius: 10px;

      max-width: 200px;
      max-height: 270px;
      width: 100%;
      height: 100%;
      background-color: #b9bdb4;

      img {
        border-radius: 50%;
        width: 12rem;
        place-content: contain;
      }

      h2 {
        display: flex;
        justify-content: center;
      }
    }
  }
`
