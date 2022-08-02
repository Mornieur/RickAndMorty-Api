import Head from 'next/head'
import Image from 'next/image'
import * as S from '../homePageStyles/homePage'
import { useEffect, useState } from 'react'
import { AiFillCaretRight } from 'react-icons/ai'
import Link from 'next/link'

interface TypeData {
  data: {
    info: {
      cont: number
      next: string
      pages: number
      prev: null
    }
    results: {
      created: string
      gender: string
      id: number
      name: string
      status: string
      image: string
      url: string
      type: string
      species: string
      location: {
        name: string
        url: string
      }
      origin: {
        name: string
        url: string
      }
    }[]
  }
}

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

export default function Home({ data }: TypeData) {
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
      ...info,
      current: endpoint
    })
  }
  return (
    <S.Container>
      <S.MainContainer>
        <h1>Wabba Lubba Dub dub!</h1>

        <form className="search" onSubmit={handleOnSubmitSearch}>
          <input name="query" type="search" />
          <button>Procurar</button>
        </form>

        <ul className="grid">
          {results.map((result: any) => {
            const { id, name, image } = result

            return (
              <Link href={`/characters/${id}`} passHref>
                <li key={id} className="card">
                  <img src={image} alt={`${name}Thumb`} />
                  <S.TitleCharacter>
                    <section>
                      <h2 className="btn btn1">{name}</h2>
                    </section>
                  </S.TitleCharacter>
                </li>
              </Link>
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
