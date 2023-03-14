import Head from 'next/head'
import Image from 'next/image'
import * as S from '../styles/homePageStyles/module'
import { useEffect, useState } from 'react'
import { AiFillCaretRight } from 'react-icons/ai'
import Link from 'next/link'

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
        <S.Title>Wabba Lubba Dub dub!</S.Title>

        <p className="description">Rick and Morty Biblioteca</p>

        <form className="search" onSubmit={handleOnSubmitSearch}>
          <input name="query" type="search" />
          <button>Pesquisar</button>
        </form>

        <ul className="grid">
          {results.map((result) => {
            const { id, name, image, status } = result
            return (
              <li key={id} className="card">
                <S.Status status={status}>{status}</S.Status>
                <Link href="/character/[id]" as={`/character/${id}`}>
                  <a>
                    <Image
                      src={image}
                      alt={`${name}Thumb`}
                      width={300}
                      height={300}
                    />
                    <h2>{name}</h2>
                  </a>
                </Link>
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
