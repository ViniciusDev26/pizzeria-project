import { useEffect, useState } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import axios from 'axios'

import { Carrousel } from '../components/Carrousel'

type TOffers = {
  id: number,
  name: string,
  image: string
}

const Home: NextPage = () => {
  const [offers, setOffers] = useState<TOffers[]>([]);

  const getOffers = async () => {
    const response = await new Promise<TOffers[]>((resolve, reject) => {
      setTimeout(() => {
        return resolve([
          {
            id: 1,
            name: 'Offer 1',
            image: 'https://fotografiamais.com.br/wp-content/uploads/2018/11/composicao-de-imagem-galeria-1.jpg'
          },
          {
            id: 2,
            name: 'Offer 2',
            image: 'https://cdn-sites-images.46graus.com/files/photos/50c3db3d/e0fce8c0-6ab1-421d-b178-c8bf202fb208/fotografia-de-casamento-em-campinas-58-768x511.jpg'
          },
          {
            id: 3,
            name: 'Offer 3',
            image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
          },
        ])
      })
    })

    setOffers(response)
  }

  useEffect(() => {
    getOffers();
  }, []);
 
  return (
    <>
      <Head>
        <title>Home Page</title>
      </Head>
      {offers.length > 0 && <Carrousel itens={offers} />}
    </>
  )
}

export default Home
