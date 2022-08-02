import Head from 'next/head'
import * as S from './styles'
import { useEffect, useState } from 'react'

const defaultEndpoint = 'https://rickandmortyapi.com/api/character/'

export async function getServerSideProps({ query }: any) {
  const { id } = query
  const res = await fetch(`${defaultEndpoint}/${id}`)
  const data = await res.json()

  return {
    props: {
      data
    }
  }
}

export default function Caracter({ data }: any) {
  const { name, image, gender, location, origin, species, status } = data

  return (
    <div>
      <Head>
        <title>{name}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <S.Container>
        <h1 className="title">{name}</h1>
        <S.Profile>
          <S.ProfileImage>
            <img src={image} alt={name} />
          </S.ProfileImage>
          <S.ProfileDetails>
            <h2>Características</h2>
            <ul>
              <li>
                <strong>Nome: {name}</strong>
              </li>
              <li>
                <strong>Status:{status}</strong>
              </li>
              <li>
                <strong>Gênero:{gender}</strong>
              </li>
              <li>
                <strong>Espécie:{species}</strong>
              </li>
              <li>
                <strong>Localização:{location?.name}</strong>
              </li>
              <li>
                <strong>Originalmente de:{origin?.name}</strong>
              </li>
            </ul>
          </S.ProfileDetails>
        </S.Profile>
      </S.Container>
    </div>
  )
}
