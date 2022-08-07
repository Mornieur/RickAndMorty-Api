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
            <section>
              <img width="200px" height="70px" src={image} alt={name} />
            </section>
          </S.ProfileImage>
          <S.ProfileDetails>
            <h2>Características</h2>
            <S.ProfileTitle>
              <strong>Nome: {name}</strong>

              <strong>Status:{status}</strong>

              <strong>Gênero:{gender}</strong>

              <strong>Espécie:{species}</strong>

              <strong>Localização:{location?.name}</strong>

              <strong>Originalmente de:{origin?.name}</strong>
            </S.ProfileTitle>
          </S.ProfileDetails>
        </S.Profile>
      </S.Container>
    </div>
  )
}
