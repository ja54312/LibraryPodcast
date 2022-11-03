import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

const EpisodeItem = () => {
    const router = useRouter()
    const { episodeId } = router.query
    //console.log(router, '2222')

    return (
        <>
            <h2>Es la pagina de id tal:{episodeId} Episodio</h2>
        </>
    )
}

export default EpisodeItem