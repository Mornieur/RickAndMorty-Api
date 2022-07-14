import Head from "next/head";

import { useEffect, useState } from "react";

const defaultEndpoint = "https://rickandmortyapi.com/api/character/";

export async function getServerSideProps({ query }) {
  const { id } = query;
  const res = await fetch(`${defaultEndpoint}/${id}`);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}

export default function Caracter({ data }) {
  const { name, image, gender, location, origin, species, status } = data;

  return (
    <div>
      <Head>
        <title>{name}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">{name}</h1>
        <div className="profile">
          <div className="profile-image">
            <img src={image} alt={name} />
          </div>
          <div className="profile-details">
            <h2>Características</h2>
            <ul>
              <li>
                <strong>Nome:</strong>
                {name}
              </li>
              <li>
                <strong>Status:</strong>
                {status}
              </li>
              <li>
                <strong>Gênero:</strong>
                {gender}
              </li>
              <li>
                <strong>Espécie:</strong>
                {species}
              </li>
              <li>
                <strong>Localização:</strong>
                {location?.name}
              </li>
              <li>
                <strong>Originalmente de:</strong>
                {origin?.name}
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
