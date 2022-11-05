import React from 'react'
import Link from 'next/link'

const Card = ({ el }) => {

    const artista = el["im:artist"].label
    const name = el["im:name"].label
    const urlImage = el["im:image"][2].label
    const id = el.id.attributes["im:id"]

    return (
        <div className='container-componente-card'>
            <Link href={`/podcast/${id}`}>
                <div className='container-card'>
                    <div className='container-image-card'>
                        {/* <Image loader={myLoader} className='image-card' src="/Podcasts125/v4/32/95/23/329523c9-6f91-5e7b-a33b-698f3cd83f1f/mza_7961570172365429932.png/170x170bb.png" width={150} height={150} alt='icono de artista'/> */}
                        <img src={urlImage} className='image-card' alt='icono de artista' />
                    </div>
                    <div className='container-name-card'>
                        <span>{name}</span>
                    </div>
                    <div className='container-autor-card'>
                        <span>Author: {artista}</span>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Card