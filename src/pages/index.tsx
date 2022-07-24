import Head from 'next/head'
import Image from 'next/image'
import * as S from '../homePageStyles/homePage'
import { useEffect, useState } from 'react'
import { AiFillCaretRight } from 'react-icons/ai'

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

export default function Home({ data }: any) {
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

      setResults((prev: any) => {
        return [...prev, ...nextData.results]
      })
    }

    request()
  }, [current])

  function handleLoadMore() {
    setPage((prev: any) => {
      return {
        ...prev,
        current: page?.next
      }
    })
  }

  function handleOnSubmitSearch(e: any) {
    e.preventDefault()

    const { currentTarget = {} } = e
    const fields = Array.from(currentTarget?.elements)
    const fieldQuery: any = fields.find((field: any) => field.name === 'query')

    const value = fieldQuery.value || ''
    const endpoint = `https://rickandmortyapi.com/api/character/?name=${value}`

    setPage({
      current: endpoint
    })
  }
  return (
    <S.Container>
      <S.MainContainer>
        <h1>Wabba Lubba Dub dub!</h1>

        <p className="description">Rick and Morty Biblioteca</p>

        <form className="search" onSubmit={handleOnSubmitSearch}>
          <input name="query" type="search" />
          <button>Pesquisar</button>
        </form>

        <ul className="grid">
          {results.map((result: any) => {
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

        <button className="seeMore" onClick={handleLoadMore}>
          VEJA MAIS
          <AiFillCaretRight />
        </button>
      </S.MainContainer>
    </S.Container>
  )
}
