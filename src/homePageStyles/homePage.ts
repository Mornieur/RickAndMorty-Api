import styled, { keyframes } from 'styled-components'

const gradientAnimate = keyframes`
  
  0% {
    background: #006f2b;
    //background: linear-gradient(90deg, rgba(255,0,0,1) 0%, rgba(201,138,255,1) 100%); 
  }
  15% {
    background: #085630;
  }
  30% {
    background: #0f4034;
  }
  50% {
    background: #003213;
    //background: linear-gradient(90deg, rgba(201,138,255,1) 0%, rgba(36,0,66,1) 100%); 
  }
  70% {
    background: #085630;
  }
  100% {
    background:#006f2b;
  }

`

export const Container = styled.div`
  background-color: black;
  background-image: url('fundoEstrelado.jpg');
  background-size: auto;
  background-position: center center;
  padding: 0;
  margin: 0;
  width: 100vw;
  width: 100%;
  height: 100vh;
  height: 100%;

  h1 {
    border: 1px solid #b9bdb4;

    background-color: rgba(255, 255, 255, 0.4);
    -webkit-backdrop-filter: blur(5px);
    backdrop-filter: blur(1px);

    color: white;
    width: 400px;
    height: 50px;
    white-space: nowrap;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
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

  form {
    display: grid;
    place-items: center;
    input {
      width: 400px;
      height: 40px;
      border-radius: 10px;
      border: 1px solid grey;
    }
    button {
      border: 2px solid grey;
      border-radius: 5px;
      width: 100px;
      height: 50px;
      font-size: 1rem;
      color: white;
      font-weight: bold;
      cursor: pointer;
      background-color: rgba(255, 255, 255, 0.4);
      -webkit-backdrop-filter: blur(5px);
      backdrop-filter: blur(1px);
    }
  }
  a {
    text-decoration: none;
    color: white;
  }

  display: grid;
  place-items: center;
  align-items: center;

  input {
    margin-right: 0;
    margin-bottom: 0.5em;
    width: 100%;
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
      /* background-color: #f0e14a; */
      border: 1px solid #b9bdb4;

      background-color: rgba(255, 255, 255, 0.4);
      -webkit-backdrop-filter: blur(5px);
      backdrop-filter: blur(1px);

      img {
        border-radius: 50%;
        border: 1px solid #b9bdb4;
        width: 10rem;
        place-content: contain;
        display: grid;
        place-items: center;
        margin: 0 auto;
        padding: 1rem;
      }
    }
  }
`

export const TitleCharacter = styled.div`
  margin-top: 1rem;
  animation: ${gradientAnimate} ease-in 3s infinite;

  border-radius: 10px;
  padding: 1px;
  background: linear-gradient(
    90deg,
    rgba(255, 0, 0, 1) 0%,
    rgba(201, 138, 255, 1) 100%
  );

  display: grid;
  place-items: center;

  section {
    outline: none;
    border: none;
    letter-spacing: 1px;
    text-transform: uppercase;
    background-color: black;
    border-radius: 10px;
    width: calc(100% - 5px);
    height: calc(100% - 5px);
    text-align: center;

    h2 {
      font-size: 1rem;
      display: flex;
      justify-content: center;
      color: white;
      cursor: pointer;
    }
  }
`

// export const TitleCharacter = styled.div`
//   section {
//     display: grid;
//     place-items: center;
//     margin: 0 auto;
//     align-items: center;
//   }
//   .btn {
//     border: none;
//     margin: 0px;
//     padding: 15px;
//     border-radius: 10px;
//     font-family: 'monteserrat', sans-serif;
//     text-transform: uppercase;
//     cursor: pointer;
//     color: #fff;
//     background-size: 200px;
//     transition: 0.6s;

//     &:hover {
//       background-position: right;
//     }
//   }

//   .btn1 {
//     background-image: linear-gradient(to left, #c4e538, #009432, #c4e538);
//   }
// `
