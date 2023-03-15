import Head from 'next/head'
import Image from 'next/image'
import * as S from './styles'

const defaultEndpoint = 'https://rickandmortyapi.com/api/character/'

export async function getServerSideProps({ query }) {
  const { id } = query
  const res = await fetch(`${defaultEndpoint}/${id}`)
  const data = await res.json()

  return {
    props: {
      data
    }
  }
}

export default function Caracter({ data }) {
  const { name, image, gender, location, origin, species, status } = data

  return (
    <S.Container>
      <Head>
        <title>{name}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <S.Main>
        <S.Title>{name}</S.Title>
        <S.Profile>
          <S.ProfileImage>
            <Image src={image} alt={name} width={250} height={250} />
          </S.ProfileImage>
          <S.ProfileDetails>
            <h2>Características</h2>
            <ul>
              <strong>Nome:</strong>
              <span>{name}</span>

              <strong>Status:</strong>
              <span>{status}</span>

              <strong>Gênero:</strong>
              <span>{gender}</span>

              <strong>Espécie:</strong>
              <span>{species}</span>

              <strong>Localização:</strong>
              <span>{location?.name}</span>

              <strong>Originalmente de:</strong>
              <span>{origin?.name}</span>
            </ul>
          </S.ProfileDetails>
        </S.Profile>
      </S.Main>
    </S.Container>
  )
}
