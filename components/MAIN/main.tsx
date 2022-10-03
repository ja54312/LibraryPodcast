import React from 'react'
import Card from '../CARD/card'

const Main = ({data}) => {
  //console.log('datos',data.feed.entry)
  const DATOS = data.feed.entry
  return (
    <main>
      {DATOS === 0 ? 
        (<span>No hay datos disponibles</span>):
        (DATOS.map((el) => <Card el={el} key={el.id.attributes.id}/>))
      }
    </main>
  )
}

export default Main