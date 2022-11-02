import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

const PodcastItem = () => {
    const router = useRouter()
    const { podcastId } = router.query

    return (
        <>
            <h2>Es la pagina de id tal:{podcastId}</h2>
        </>
    )
}

export default PodcastItem