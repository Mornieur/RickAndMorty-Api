import styled from 'styled-components'

export const Container = styled.div`
  padding: 0 2rem;

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
  main {
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
        padding: 1.5rem;
        text-align: left;
        color: inherit;
        text-decoration: none;
        border: 1px solid #eaeaea;
        border-radius: 10px;
        transition: color 0.15s ease, border-color 0.15s ease;
        max-width: 300px;

        :hover {
          color: #0070f3;
          border-color: #0070f3;

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
        }
      }
    }
  }
`

export const FooterContainer = styled.div`
  footer {
    display: flex;
    flex: 1;
    padding: 2rem 0;
    border-top: 1px solid #eaeaea;
    justify-content: center;
    align-items: center;

    a {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-grow: 1;
    }
  }
`
