import React, { useState, useEffect } from 'react'
import { Data, Feed } from '../../schema/data.model'
import Card from '../CARD/card'

const Main = ({ data }: { data: Data }) => {
  const [datos, setDatos] = useState(null)
  useEffect(() => {
    setDatos(data.feed.entry)
    //console.log(datos)
  }, [data]);

  return (
    <main>
      {datos === null ?
        (<span>No hay datos disponibles</span>) :
        (datos.map((el) => <Card el={el} key={el.id.attributes["im:id"]} />))
      }
    </main>
  )
}

export default Main