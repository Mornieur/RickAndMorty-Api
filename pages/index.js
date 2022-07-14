import Head from 'next/head'
import Image from 'next/image'
import * as S from '../styles/module'
import { useEffect, useState } from 'react'

const defaultEndpoint = 'https://rickandmortyapi.com/api/character/'

export async function getServerSideProps() {
  const res = await fetch(defaultEndpoint)
  const data = await res.json()

  return {
    props: {
      data
    }
  }
}

export default function Home({ data }) {
  const { info, results: defaultResults = [] } = data
  const [results, setResults] = useState(defaultResults)
  const [page, setPage] = useState({
    ...info,
    current: defaultEndpoint
  })

  const { current } = page

  useEffect(() => {
    if (current === defaultEndpoint) return

    async function request() {
      const res = await fetch(current)
      const nextData = await res.json()

      setPage({
        current,
        ...nextData.info
      })

      if (!nextData.info?.prev) {
        setResults(nextData.results)
        return
      }

      setResults((prev) => {
        return [...prev, ...nextData.results]
      })
    }

    request()
  }, [current])

  function handleLoadMore() {
    setPage((prev) => {
      return {
        ...prev,
        current: page?.next
      }
    })
  }

  function handleOnSubmitSearch(e) {
    e.preventDefault()

    const { currentTarget = {} } = e
    const fields = Array.from(currentTarget?.elements)
    const fieldQuery = fields.find((field) => field.name === 'query')

    const value = fieldQuery.value || ''
    const endpoint = `https://rickandmortyapi.com/api/character/?name=${value}`

    setPage({
      current: endpoint
    })
  }
  return (
    <S.Container>
      <Head>
        <title>Wabba Lubba Dub dub!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <S.MainContainer>
        <main>
          <h1>Wabba Lubba Dub dub!</h1>

          <p className="description">Rick and Morty Biblioteca</p>

          <form className="search" onSubmit={handleOnSubmitSearch}>
            <input name="query" type="search" />
            <button>Pesquisar</button>
          </form>

          <ul className="grid">
            {results.map((result) => {
              const { id, name, image } = result

              return (
                <li key={id} className="card">
                  <a href="https://nextjs.org/docs">
                    <img src={image} alt={`${name}Thumb`} />
                    <h2>{name}</h2>
                  </a>
                </li>
              )
            })}
          </ul>

          <p>
            <button onClick={handleLoadMore}>Veja Mais</button>
          </p>
        </main>
      </S.MainContainer>

      <S.FooterContainer>
        <footer className="footer">
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{' '}
            <span className="\styles.logo">
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                width={72}
                height={16}
              />
            </span>
          </a>
        </footer>
      </S.FooterContainer>
    </S.Container>
  )
}
