import styled from 'styled-components'

export const Container = styled.div`
  padding: 0 2rem;
  background-color: #686230;

  main {
    height: 1em;
    margin-left: 0.5rem;

    @media (max-width: 600px) {
      .grid {
        width: 100%;
        flex-direction: column;
      }
    }
  }

  head {
    title {
      a {
        color: #0070f3;
        text-decoration: none;

        a:hover {
          text-decoration: underline;
        }
        a:focus {
          text-decoration: underline;
        }

        a:active {
          text-decoration: underline;
        }
      }
    }

    title {
      margin: 0;
      line-height: 1.15;
      font-size: 4rem;

      .description {
        text-align: center;
      }

      .description {
        margin: 4rem 0;
        line-height: 1.5;
        font-size: 1.5rem;
      }
    }
  }

  @media (max-width: 600px) {
    .grid {
      width: 100%;
      flex-direction: column;
    }
  }
`

export const MainContainer = styled.div`
  max-width: 100%;
  min-height: 100vh;
  padding: 4rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
    max-width: 1000px;
    width: 100%;

    list-style: none;
    margin-left: 0;
    padding-left: 0;

    .card {
      margin: 1rem;
      gap: 1rem;
      padding: 1rem;
      text-align: left;
      color: inherit;
      text-decoration: none;
      border-radius: 10px;
      transition: color 0.15s ease, border-color 0.15s ease;
      max-width: 300px;
      text-align: center;
      background-color: #d0b997;
      position: relative;
      max-height: 16rem;

      h2 {
        font-size: 0.7rem;
        text-decoration: none;
        border: none;
        color: #fff;
        width: 100%;
        max-width: 200px;
        width: 100%;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
      }

      a {
        text-decoration: none;
        border: none;
      }

      img {
        max-height: 200px;
        height: 100%;
      }

      :hover {
        transform: scale(1.1);
        transition: transform 0.2s ease-in-out;
      }

      /* :hover {
        color: #0070f3;
        border-color: #0070f3;x

        :focus {
          color: #0070f3;
          border-color: #0070f3;
        }

        :active {
          color: #0070f3;
          border-color: #0070f3;
        }
        h2 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }
      } */
    }
  }

  .search {
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    button {
      background-color: #26354b;
      color: #ffffff;
      border: none;
      padding: 10px 20px;
      border-radius: 5px;
      font-weight: bold;
      text-transform: uppercase;
      max-width: 100px;
      width: 100%;
      text-align: center;
      display: flex;
      justify-content: center;
      cursor: pointer;
    }
  }
`

export const Status = styled.p`
  /* background-color: #97ce4c; */
  background-color: ${({ status }) =>
    status === 'Alive'
      ? '#97ce4c'
      : 'red' && status === 'unknown'
      ? 'grey'
      : 'red'};
  position: absolute;
  max-width: 200px;
  width: 70px;
  padding: 0.2rem;
  right: 1rem;
  z-index: 999;
  font-size: 0.7rem;
  font-weight: 600;
  color: #fff;
`

export const Title = styled.h1`
  padding: 1rem;
  color: #fff;
`
