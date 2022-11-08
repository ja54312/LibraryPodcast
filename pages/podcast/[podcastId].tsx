import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Loader from '../../components/LOADER/Loader'
import Message from '../../components/MESSAGE/message'
import { helpHttp } from '../../helpers/helpHttp'

const PodcastItem = () => {
    const router = useRouter()
    const { podcastId } = router.query
    const [data, setData] = useState();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const url = `https://itunes.apple.com/lookup?id=${podcastId}`

    useEffect(() => {
        setLoading(true);
        helpHttp()
            .get(url)
            .then((res) => {
                if (!res.err) {
                    setData(res);
                    setError(null);
                } else {
                    setData(null);
                    setError(res);
                }
                setLoading(false);
            });
    }, [url]);
    console.log(data, 'data')
    return (
        <section className='section-general-podcastPage'>
            {loading && <Loader />}
            {error && (
                <Message
                    msg={`Error ${error.status}: ${error.statusText}`}
                    bgColor="#dc3545"
                />
            )}
            <div className='container-general-podcastPage'>
                <div className='container-card-general'></div>
                <div className='container-episodes-general'></div>
            </div>
        </section>
    )
}

export default PodcastItem